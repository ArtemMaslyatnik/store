from rest_framework import serializers
from api.models import Basket, BasketDevice, Brand, Device, DeviceInfo, Type, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class DeviceSerializer(serializers.ModelSerializer):

    deviceinfos = serializers.StringRelatedField(many=True)

    class Meta:
        model = Device
        fields = ['id', 'name', 'price', 'esteem', 'img', 'type', 'brand', 'deviceinfos']


class DeviceInfoSerializer(serializers.ModelSerializer):

    # deviceы = DeviceSerializer()

    class Meta:
        model = DeviceInfo
        fields = '__all__'

    # def create(self, validated_data):
    #     device_data = validated_data.pop('device')
    #     device = Device.objects.create(**device_data)
    #     device_info = DeviceInfo.objects.create(device=device, **validated_data)
    #     return device_info


class BasketSerializer(serializers.ModelSerializer):

    basketdevices = serializers.StringRelatedField(many=True)

    class Meta:
        model = Basket
        fields = ['user', 'basketdevices']


class BasketDeviceSerializer(serializers.ModelSerializer):

    class Meta:
        model = BasketDevice
        fields = '__all__'


class TypeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Type
        fields = ['name',]


class BrandSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Brand
        fields = ['name',]


class RatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ['rate', 'user', 'device']


class TypeBrendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Device
        fields = ['name', 'device']
