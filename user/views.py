from django.shortcuts import render, HttpResponse, HttpResponseRedirect
# Create your views here.
from . import forms
from django.urls import reverse


def login(request):
    login_form = forms.Login(request.POST or None)
    if login_form.is_valid():
        if login_form.login(request):
            return HttpResponseRedirect(reverse('dashboard:dashboard'))
    return render(request, 'user/login.html', {'title': 'Login - Page', 'login': login_form})


def signup(request):
    signup_form = forms.SignUp(request.POST or None)
    if signup_form.is_valid():
        if signup_form.save(request):
            return HttpResponseRedirect(reverse('dashboard:dashboard'))
    return render(request, 'user/signup.html', {'title': "signup - Page"})


def forgot(request):
    return HttpResponse("<h1>This Page is Under Construction")
