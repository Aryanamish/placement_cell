from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [

    path('', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('forgot/', views.forgot, name='forgot'),
]