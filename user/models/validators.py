from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_reg_no(value):
    if value.isnumeric() is False:
        raise ValidationError(_(f"reg_no can only be numeric not '{value}'"),)
