# Generated by Django 3.1 on 2020-08-10 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fruits', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fruits',
            name='price',
            field=models.PositiveIntegerField(verbose_name='価格'),
        ),
    ]