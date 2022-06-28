from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth import login
User = get_user_model()


class SignUp(forms.ModelForm):
    """
    The default

    """
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['email', 'username', 'reg_no']

    def save(self, request, *args, **kwargs):
        user = super(SignUp, self).save(*args, **kwargs)
        login(request, user)
        return user

    def clean(self):
        '''
        Verify both passwords match.
        '''
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password_2 = cleaned_data.get("confirm_password")
        if password is not None and password != password_2:
            self.add_error("password_2", "Your passwords must match")
        return cleaned_data
