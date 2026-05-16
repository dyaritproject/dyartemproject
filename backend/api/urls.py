from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterView, UserProfileView, logout_view,
    ReferralViewSet, ArticleViewSet, DocumentViewSet
)

router = DefaultRouter()
router.register(r'referrals', ReferralViewSet, basename='referral')
router.register(r'articles', ArticleViewSet, basename='article')
router.register(r'documents', DocumentViewSet, basename='document')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='auth-login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='auth-refresh'),
    path('auth/logout/', logout_view, name='auth-logout'),
    path('auth/profile/', UserProfileView.as_view(), name='auth-profile'),
]
