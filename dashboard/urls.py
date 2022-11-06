from django.urls import path, include

from . import views

app_name = 'dashboard'
urlpatterns = [
    path('all/', views.Dashboard.as_view(), name='dashboard'),
    path('search/', views.Search.as_view(), name='dashboard'),
    path('save/', views.Save.as_view(), name='dashboard'),
    path('<slug:slug>/edit/', views.edit, name='dashboard'),
    path('<slug:slug>/', views.GetJob.as_view(), name='dashboard'),
]
