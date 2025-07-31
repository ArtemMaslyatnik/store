from django.contrib.auth.models import User
from django.db import models


class Type(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=64, blank=False, default='')


class Brand(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=128, blank=False, default='')


class Device(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=128, blank=False, default='')
    price = models.BigIntegerField()
    esteem = models.SmallIntegerField()
    img = models.CharField(max_length=128, blank=False, default='')
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)


class DeviceInfo(models.Model):
    id = models.AutoField
    title = models.CharField(max_length=128, blank=False, default='')
    description = models.CharField(max_length=1000, blank=False, default='')
    device = models.ForeignKey(Device, related_name='deviceinfos', on_delete=models.CASCADE)


class Basket(models.Model):
    id = models.AutoField
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)


class BasketDevice(models.Model):
    id = models.AutoField
    basket = models.ForeignKey(Basket, related_name='basketdevices', on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class Rating(models.Model):
    id = models.AutoField
    rate = models.SmallIntegerField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class TypeBrend(models.Model):
    id = models.AutoField
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
