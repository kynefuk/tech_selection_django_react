from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Fruits
from .serializers import FruitsSerializer


class FruitsListCreateView(APIView):
    def get(self, request, format=None):
        fruits = Fruits.objects.all()
        serializer = FruitsSerializer(instance=fruits, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = FruitsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class FruitsAPIView(APIView):
    def put(self, request, pk, format=None):
        fruit = get_object_or_404(Fruits, pk=pk)
        serializer = FruitsSerializer(instance=fruit, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        fruit = get_object_or_404(Fruits, pk=pk)
        fruit.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
