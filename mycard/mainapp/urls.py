from django.urls import path
from mainapp import views
from . import views

urlpatterns = [
    path('', views.avatar, name='home'),
    path('about', views.about, name='about')
]
