# Generated by Django 3.2 on 2023-05-27 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='shopping_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
