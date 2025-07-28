from rest_framework import viewsets

from api.models import Device, DeviceInfo
from api.serializers import DeviceInfoSerializer, DeviceSerializer


class DeviceViewSet(viewsets.ModelViewSet):

    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class DeviceInfoViewSet(viewsets.ModelViewSet):

    queryset = DeviceInfo.objects.all()
    serializer_class = DeviceInfoSerializer
