from rest_framework import serializers
from .models import InterviewReview


class InterviewReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = InterviewReview
        fields = [
            'round_detail',
            'company_name',
            'year',
            'desc',
            'slug',
            'job_title',
        ]

class InterviewReviewGetSerializers(serializers.ModelSerializer):
    class Meta:
        model = InterviewReview
        fields = [
            'round_detail',
            'company_name',
            'year',
            'desc',
            'slug',
            'job_title',
        ]
