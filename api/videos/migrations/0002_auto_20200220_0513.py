# Generated by Django 3.0.3 on 2020-02-20 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='end_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='video',
            name='start_date',
            field=models.DateField(),
        ),
    ]
