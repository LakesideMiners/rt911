# Generated by Django 3.0.3 on 2020-02-20 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0002_auto_20200220_0513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='end_time',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='video',
            name='start_time',
            field=models.TimeField(),
        ),
    ]
