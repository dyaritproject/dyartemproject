from django.contrib import admin
from .models import Referral, Article, Document


@admin.register(Referral)
class ReferralAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'service_requested', 'status', 'created_at')
    list_filter = ('status', 'service_requested')
    search_fields = ('first_name', 'last_name', 'email', 'ndis_number')
    readonly_fields = ('created_at', 'updated_at')
    list_editable = ('status',)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'is_published', 'created_at')
    list_filter = ('category', 'is_published')
    search_fields = ('title', 'content')
    list_editable = ('is_published',)


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_public', 'uploaded_by', 'created_at')
    list_filter = ('category', 'is_public')
    search_fields = ('title', 'description')
    list_editable = ('is_public',)
