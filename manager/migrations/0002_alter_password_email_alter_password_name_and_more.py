# Generated by Django 4.2.5 on 2024-01-09 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='password',
            name='email',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='password',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='password',
            name='password',
            field=models.CharField(max_length=300),
        ),
    ]
