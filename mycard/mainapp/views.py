from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse
from django.core.mail import send_mail


# Create your views here.
def avatar(request):
    return render(request, 'mainapp/home.html')


def about(request):
    return render(request, "mainapp/aboutme.html")
