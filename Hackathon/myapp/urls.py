from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('about', views.about, name='about'),
    path('services', views.service, name='services'),
    path('contact', views.contact, name='contact'),
    path('register', views.register, name='register'),
    path('upload_file', views.upload_file, name='upload_file'),
    path('login', views.login, name='login')
]



