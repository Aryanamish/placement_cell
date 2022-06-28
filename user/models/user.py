from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from . import validators


class UserManager(BaseUserManager):

    def create_user(self, reg_no, username, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not reg_no:
            raise ValueError('Users must have an Username')
        if not email:
            raise ValueError('Users must have an Email address')
        user = self.model(
            email=self.normalize_email(email),
            reg_no=reg_no,
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, reg_no, email, username, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email=email,
            reg_no=reg_no,
            password=password,
            username=username,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, reg_no, email, username, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email=email,
            reg_no=reg_no,
            password=password,
            username=username,
        )
        user.admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):

    gender_choice = (
        (0, 'Male'),
        (1, 'Female'),
        (2, 'Others'),
    )
    branch_choice = (
        (0, 'CSE'),

    )
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    reg_no = models.CharField(max_length=8, unique=True, null=False, validators=[validators.validate_reg_no])
    username = models.CharField(max_length=25, unique=True, null=False)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_seen = models.DateTimeField(auto_now=True)
    gender = models.PositiveIntegerField(choices=gender_choice, null=True)
    active = models.BooleanField(default=True)
    branch = models.PositiveIntegerField(choices=branch_choice, null=True)
    passing_year = models.DateField(null=True)
    staff = models.BooleanField(default=False)  # a admin user; non super-user
    admin = models.BooleanField(default=False)  # a superuser
    objects = UserManager()
    # notice the absence of a "Password field", that is built in.

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'reg_no'] # Email & Password are required by default.
    EMAIL_FIELD = 'username'

    def get_full_name(self):
        # The user is identified by their email address
        return self.first_name + " " + self.last_name

    def get_short_name(self):
        # The user is identified by their email address
        return self.first_name

    def __str__(self):
        return f"{self.reg_no} {'(Admin)' if self.is_admin is True else ''}"

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.staff

    @property
    def is_admin(self):
        "Is the user a admin member?"
        return self.admin




