from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    roll_no = models.CharField(max_length=10)
    register_no = models.CharField(max_length=8)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
