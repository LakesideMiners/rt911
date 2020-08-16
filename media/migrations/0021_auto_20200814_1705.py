# Generated by Django 3.0.7 on 2020-08-14 17:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('media', '0020_auto_20200814_1658'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='typeOf',
        ),
        migrations.AddField(
            model_name='tag',
            name='type_of',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='media.TagType'),
        ),
        migrations.AlterField(
            model_name='media',
            name='tags',
            field=models.ManyToManyField(to='media.Tag'),
        ),
    ]
