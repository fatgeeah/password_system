# Generated by Django 4.2.5 on 2024-01-09 14:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0003_alter_password_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='password',
            old_name='password',
            new_name='enc_password',
        ),
    ]
