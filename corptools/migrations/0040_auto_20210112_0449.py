# Generated by Django 3.1.1 on 2021-01-12 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('corptools', '0039_auto_20210112_0402'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assetsfilter',
            name='eve_groups',
        ),
        migrations.RemoveField(
            model_name='assetsfilter',
            name='eve_types',
        ),
        migrations.AddField(
            model_name='assetsfilter',
            name='categories',
            field=models.ManyToManyField(blank=True, help_text='Filter on Asset Categories.', to='corptools.EveItemCategory'),
        ),
        migrations.AddField(
            model_name='assetsfilter',
            name='constellations',
            field=models.ManyToManyField(blank=True, help_text='Limit filter to specific constellations', to='corptools.MapConstellation'),
        ),
        migrations.AddField(
            model_name='assetsfilter',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='Filter on Asset Groups.', to='corptools.EveItemGroup'),
        ),
        migrations.AddField(
            model_name='assetsfilter',
            name='regions',
            field=models.ManyToManyField(blank=True, help_text='Limit filter to specific regions', to='corptools.MapRegion'),
        ),
        migrations.AddField(
            model_name='assetsfilter',
            name='types',
            field=models.ManyToManyField(blank=True, help_text='Filter on Asset Types.', to='corptools.EveItemType'),
        ),
        migrations.AlterField(
            model_name='assetsfilter',
            name='systems',
            field=models.ManyToManyField(blank=True, help_text='Limit filter to specific systems', to='corptools.MapSystem'),
        ),
    ]
