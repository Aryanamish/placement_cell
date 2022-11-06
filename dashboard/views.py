from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from rest_framework import generics
from .models import InterviewReview
from .serializer import InterviewReviewSerializers
from time import sleep
from django.db.models import Q
from django.http import JsonResponse
import json

class Dashboard(generics.ListAPIView):
    # queryset = InterviewReview.objects.all()
    serializer_class = InterviewReviewSerializers

    def get_queryset(self):
        user = self.request.user
        data = InterviewReview.objects.filter(user=user)
        # sleep(2)
        return data


class GetJob(generics.RetrieveAPIView):
    serializer_class = InterviewReviewSerializers
    lookup_field = 'slug'
    queryset = InterviewReview.objects.all()




class Search(generics.ListAPIView):
    serializer_class = InterviewReviewSerializers

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get('q', None)
        if query is None:
            print(InterviewReview.objects.all().exclude(user=self.request.user))
            return list(InterviewReview.objects.all().exclude(user=self.request.user))[-1:-11:-1]
        else:
            return InterviewReview.objects.filter(
                Q(company_name__icontains=query) | Q(year__icontains=query) | Q(job_title__icontains=query)).exclude(user=self.request.user)


class Save(generics.CreateAPIView):
    queryset = InterviewReview.objects.all()
    serializer_class = InterviewReviewSerializers

    def perform_create(self, serializer):
        slug = serializer.validated_data.get('slug')
        if slug is None:
            serializer.save(user=self.request.user)


def edit(request, slug):
    instance = InterviewReview.objects.filter(slug=slug, user=request.user)
    if instance.exists():
        instance = instance.last()
        ser = InterviewReviewSerializers(request.POST or None)

        instance.company_name = ser.data.get('company_name')
        instance.desc = ser.data.get('desc')
        instance.job_title = ser.data.get('job_title')
        instance.round_detail = json.loads(ser.data.get('round_detail'))
        instance.year = ser.data.get('year')
        instance.save()

        return JsonResponse({'message': 'success'})
    return JsonResponse({'message': 'faliur'})


class Edit(generics.UpdateAPIView):
    serializer_class = InterviewReviewSerializers
    lookup_field = 'slug'

    def get_queryset(self):
        return InterviewReview.objects.filter(user=self.request.user)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.validated_data.get('user') == request.user:
            serializer.save()

