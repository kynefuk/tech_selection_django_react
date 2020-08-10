from django.db import models


class TimeStamp(models.Model):
    created_at = models.DateTimeField(verbose_name="登録日", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日", auto_now=True)

    class Meta:
        abstract = True


class Fruits(TimeStamp):
    name = models.CharField(verbose_name="名称", max_length=20)
    price = models.PositiveIntegerField(verbose_name="価格")

    class Meta:
        ordering = ["-updated_at"]

    def __str__(self):
        return self.name
