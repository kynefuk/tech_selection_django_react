from rest_framework import serializers

from .models import SalesInfo, SoldInfo
from fruits.serializers import FruitsSerializer
from fruits.models import Fruits


class SalesInfoSerializer(serializers.ModelSerializer):
    fruit = FruitsSerializer()

    class Meta:
        model = SalesInfo
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at"]


class SalesInfoCreateUpdateSerializer(serializers.ModelSerializer):
    fruit_id_list = serializers.SerializerMethodField()
    fruit_name_list = serializers.SerializerMethodField()

    class Meta:
        model = SalesInfo
        fields = [
            "id",
            "fruit",
            "num",
            "sum",
            "created_at",
            "updated_at",
            "fruit_id_list",
            "fruit_name_list",
        ]
        read_only_fields = [
            "id",
            "sum",
            "updated_at",
            "fruit_id_list",
            "fruit_name_list",
        ]

    def get_fruit_id_list(self, instance):
        return list(Fruits.objects.all().values_list("id", flat=True))

    def get_fruit_name_list(self, instance):
        return list(Fruits.objects.all().values_list("name", flat=True))


class SoldInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoldInfo
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at"]
