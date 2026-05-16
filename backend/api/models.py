from django.db import models
from django.contrib.auth.models import User
import os


class Referral(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Under Review', 'Under Review'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='referrals')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    ndis_number = models.CharField(max_length=50, blank=True)
    service_requested = models.CharField(max_length=100)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=50, default='Pending', choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.service_requested}"

    class Meta:
        ordering = ['-created_at']


class Article(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class Document(models.Model):
    CATEGORY_CHOICES = [
        ('Forms', 'Forms'),
        ('Guides', 'Guides'),
        ('Policies', 'Policies'),
        ('Templates', 'Templates'),
        ('Reports', 'Reports'),
    ]
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='Forms')
    file = models.FileField(upload_to='documents/')
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    @property
    def file_size_display(self):
        try:
            size = self.file.size
            if size < 1024:
                return f"{size} B"
            elif size < 1024 * 1024:
                return f"{size // 1024} KB"
            return f"{size / (1024 * 1024):.1f} MB"
        except Exception:
            return "N/A"

    @property
    def file_extension(self):
        _, ext = os.path.splitext(self.file.name)
        return ext.upper().replace('.', '')

    class Meta:
        ordering = ['-created_at']
