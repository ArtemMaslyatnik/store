from rest_framework import serializers
from api.models import Basket, Brand, Device, DeviceInfo


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Device
        fields = ['name', 'price', 'esteem']


class DeviceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Device
        fields = ['name', 'price', 'esteem']


class DeviceInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DeviceInfo
        fields = ['title', 'description', 'device']


class BasketSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Basket
        fields = ['user', 'device']


class TypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Device
        fields = ['name', 'device']


class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ['name', 'device']


class RatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ['rate', 'user', 'device']


class TypeBrendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Device
        fields = ['name', 'device']
