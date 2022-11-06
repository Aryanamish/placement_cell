from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.dispatch import receiver
from django.db.models.signals import pre_save


class InterviewReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    round_detail = models.JSONField()
    company_name = models.CharField(max_length=100)
    year = models.CharField(max_length=4)
    desc = models.TextField()
    slug = models.SlugField(editable=False, unique=True)
    job_title = models.CharField(max_length=100)

    def __str__(self):
        return self.slug


@receiver(pre_save, sender=InterviewReview)
def store_pre_save(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.company_name + instance.user.username)