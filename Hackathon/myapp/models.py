from django.db import models

# Create your models here.
class Feature(models.Model):
    name = models.CharField(max_length=100)
    details = models.CharField(max_length=500)
    
class FormData(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    uploaded_file = models.FileField(upload_to='uploads/')
