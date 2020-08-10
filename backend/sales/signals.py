from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import SalesInfo, SoldInfo


@receiver(post_save, sender=SalesInfo)
def save_sold_info(sender, instance, created, **kwargs):
    if created:
        sold_info = SoldInfo(
            fruit=instance.fruit.name, num=instance.num, sum=instance.sum
        )
        sold_info.save()
