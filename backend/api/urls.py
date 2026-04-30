from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReferralViewSet, ArticleViewSet

router = DefaultRouter()
router.register(r'referrals', ReferralViewSet)
router.register(r'articles', ArticleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
