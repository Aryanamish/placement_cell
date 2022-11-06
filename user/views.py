from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics
from django.middleware.csrf import get_token


def login_user(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'loggedIn': True})
    else:
        return JsonResponse({'loggedIn': False})

def auth(request):
    if request.user.is_authenticated:
        return JsonResponse({'loggedIn': True})
        
    return JsonResponse({'loggedIn': False})


def signup(request):
    return HttpResponse()


def logout_user(request):
    logout(request)
    return JsonResponse({'loggedIn': False})
