from django.db import models

from fruits.models import Fruits


class TimeStamp(models.Model):
    created_at = models.DateTimeField(verbose_name="登録日", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日", auto_now=True)

    class Meta:
        abstract = True


class SalesInfo(TimeStamp):
    fruit = models.ForeignKey(Fruits, verbose_name="果物", on_delete=models.CASCADE)
    num = models.PositiveIntegerField(verbose_name="個数")

    @property
    def sum(self):
        return self.fruit.price * self.num

    def __str__(self):
        return f"{self.fruit.name}: {self.num}個: {self.sum}円"


class SoldInfo(TimeStamp):
    fruit = models.CharField(verbose_name="果物", max_length=20)
    num = models.PositiveIntegerField(verbose_name="個数")
    sum = models.PositiveIntegerField(verbose_name="売り上げ")

    def __str__(self):
        return f"{self.fruit}: {self.num}個: {self.sum}円"
