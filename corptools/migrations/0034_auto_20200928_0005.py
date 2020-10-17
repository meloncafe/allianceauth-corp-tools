# Generated by Django 3.1.1 on 2020-09-28 00:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('corptools', '0033_skilllist_order_weight'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='characterasset',
            index=models.Index(fields=['location_id'], name='corptools_c_locatio_b58222_idx'),
        ),
        migrations.AddIndex(
            model_name='characterasset',
            index=models.Index(fields=['type_id'], name='corptools_c_type_id_05ccc2_idx'),
        ),
        migrations.AddIndex(
            model_name='characterasset',
            index=models.Index(fields=['item_id'], name='corptools_c_item_id_1800a8_idx'),
        ),
        migrations.AddIndex(
            model_name='corpasset',
            index=models.Index(fields=['location_id'], name='corptools_c_locatio_a86faf_idx'),
        ),
        migrations.AddIndex(
            model_name='corpasset',
            index=models.Index(fields=['type_id'], name='corptools_c_type_id_e9d79e_idx'),
        ),
        migrations.AddIndex(
            model_name='corpasset',
            index=models.Index(fields=['item_id'], name='corptools_c_item_id_41066b_idx'),
        ),
    ]