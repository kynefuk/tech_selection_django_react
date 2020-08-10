from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import SalesInfo, SoldInfo
from .serializers import SalesInfoSerializer, SalesInfoCreateUpdateSerializer


class SalesInfoListCreateView(APIView):
    def get(self, request, format=None):
        sales_info = SalesInfo.objects.all()
        serializer = SalesInfoSerializer(instance=sales_info, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = SalesInfoCreateUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class SalesInfoAPIView(APIView):
    def get(self, request, pk, format=None):
        sales_info = get_object_or_404(SalesInfo, pk=pk)
        serializer = SalesInfoCreateUpdateSerializer(instance=sales_info)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        sales_info = get_object_or_404(SalesInfo, pk=pk)
        serializer = SalesInfoCreateUpdateSerializer(
            instance=sales_info, data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        sales_info = get_object_or_404(SalesInfo, pk=pk)
        sales_info.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class SoldInfoMonthlyView(APIView):
    def get(self, request, format=None):
        sales = SoldInfo.objects.all()
        # 当月を含む過去三ヶ月の月別の売り上げと内訳
        sum = self.calc_sum(sales)

    def calc_sum(self, sales):
        sum = 0
        for sale in sales:
            sum += sale.sum
        return sum


class SoldInfoDailyView(APIView):
    def get(self, request, format=None):
        pass


class SoldInfoSumView(APIView):
    def get(self, request, format=None):
        pass
