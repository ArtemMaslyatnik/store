from django.db import models


class User(models.Model):
    id = models.AutoField
    email = models.CharField(max_length=32, blank=False, default='')
    password = models.CharField(max_length=32, blank=False, default='')
    role = models.CharField(max_length=32, blank=False, default='USER')


class Device(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=128, blank=False, default='')
    price = models.BigIntegerField()
    esteem = models.SmallIntegerField()
    img = models.CharField(max_length=128, blank=False, default='')


class DeviceInfo(models.Model):
    id = models.AutoField
    title = models.CharField(max_length=128, blank=False, default='')
    description = models.CharField(max_length=1000, blank=False, default='')
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class Basket(models.Model):
    id = models.AutoField
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class Type(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=64, blank=False, default='')
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class Brand(models.Model):
    id = models.AutoField
    name = models.CharField(max_length=128, blank=False, default='')
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class Rating(models.Model):
    id = models.AutoField
    rate = models.SmallIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)


class TypeBrend(models.Model):
    id = models.AutoField
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    device = models.ForeignKey(Device, on_delete=models.CASCADE)