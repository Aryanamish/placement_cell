"""placement_oasis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.middleware.csrf import get_token
from user import views
from django.shortcuts import render, HttpResponse
import git

@api_view(['GET'])
def get_csrf(request):
    return Response({'csrf': get_token(request)})

def main(request):
    return render(request, 'index.html', {})
    
def webhook(request):
    if request.POST:
        repo = git.Repo('path/to/git_repo')
        origin = repo.remotes.origin
        origin.pull()
        return HttpResponse('Updated PythonAnywhere successfully')
    else:
        return HttpResponse('Wrong event type')
    
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/csrf/', get_csrf),
    path('api/', include('user.urls')),
    path('api/jobs/', include('dashboard.urls')),
    path('update_server/', webhook),
    re_path('.*', main),

]

