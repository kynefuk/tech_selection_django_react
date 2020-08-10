from rest_framework import serializers

from fruits.models import Fruits


class FruitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fruits
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at"]
