from django import forms
from django.contrib.auth import authenticate, login
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from user.models.validators import validate_reg_no


class Login(forms.Form):
    username = forms.CharField(
        label='Enter Your Username, reg no, email id',
        widget=forms.TextInput(attrs={
            'placeholder': 'Enter Your Username, reg no, email id',
            'class': 'form-control',
        })
    )
    password = forms.CharField(
        label='Enter Your Password',
        widget=forms.TextInput(attrs={
            'type': 'password',
            'placeholder': 'Enter Your Password',
            'class': 'form-control',
        })
    )

    def clean_username(self):
        username = self.cleaned_data.get('username')
        validated = False
        self.username_field = ''
        try:
            if validate_email(username):
                self.username_field = 'email'
        except:
            try:
                if validate_reg_no(username):
                    self.username_field = 'reg_no'
            except:
                self.username_field = 'username'
        return username

    def login(self, request):
        if request is None:
            return None
        data = self.cleaned_data
        detail = {
            self.username_field: data.get('username'),
            'password': data.get('password'),
        }
        user = authenticate(request, **detail)
        if user is not None:
            login(request, user)
            return user
        return None
