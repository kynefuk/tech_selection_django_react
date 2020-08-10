# Generated by Django 3.1 on 2020-08-10 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fruits',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='登録日')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新日')),
                ('name', models.CharField(max_length=20, verbose_name='名称')),
                ('price', models.IntegerField(verbose_name='価格')),
            ],
            options={
                'ordering': ['-updated_at'],
            },
        ),
    ]
