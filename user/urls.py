from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [

    path('signup/', views.signup, name='signup'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='login'),
    path('auth/', views.auth, name='forgot'),
]