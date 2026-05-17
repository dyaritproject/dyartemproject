from rest_framework import viewsets, generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings
from .models import Referral, Article, Document
from .serializers import (
    RegisterSerializer, UserSerializer,
    ReferralSerializer, ArticleSerializer, DocumentSerializer
)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data.get('refresh_token')
        if refresh_token:
            token = RefreshToken(refresh_token)
            token.blacklist()
    except Exception:
        pass
    return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)


class ReferralViewSet(viewsets.ModelViewSet):
    serializer_class = ReferralSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return Referral.objects.none()
        if user.is_staff:
            return Referral.objects.all()
        return Referral.objects.filter(user=user)

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            referral = serializer.save(user=self.request.user)
        else:
            referral = serializer.save()
            
        try:
            subject = f"New Referral Received: {referral.first_name} {referral.last_name}"
            message = (
                f"A new referral has been securely submitted via the DYAR website.\n\n"
                f"Participant: {referral.first_name} {referral.last_name}\n"
                f"Service Requested: {referral.service_requested}\n"
                f"Email provided: {referral.email}\n"
                f"Phone provided: {referral.phone}\n\n"
                f"To protect participant privacy, the full details (including NDIS number and additional information) "
                f"are stored securely in the database.\n\n"
                f"Please log in to the secure administrator dashboard at https://dyar.com.au/admin to view and process this referral."
            )
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                ['hello@dyar.com.au'],
                fail_silently=True,
            )
        except Exception as e:
            print(f"Failed to send referral email notification: {e}")


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(is_published=True)

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAdminUser()]


class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Document.objects.all()
        return Document.objects.filter(is_public=True)

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAdminUser()]

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)
