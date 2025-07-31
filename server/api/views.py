from rest_framework import viewsets

from api.models import Basket, Brand, Device, DeviceInfo, Rating, Type, TypeBrend
from api.permission import IsAdminOrReadOnly, IsOwner
from api.serializers import BasketSerializer, BrandSerializer, DeviceInfoSerializer, DeviceSerializer, RatingSerializer, TypeBrendSerializer, TypeSerializer


class TypeViewSet(viewsets.ModelViewSet):

    queryset = Type.objects.all()
    serializer_class = TypeSerializer

    permission_classes = (IsAdminOrReadOnly, )


class BrandViewSet(viewsets.ModelViewSet):

    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

    permission_classes = (IsAdminOrReadOnly, )


class DeviceViewSet(viewsets.ModelViewSet):

    queryset = Device.objects.all()
    serializer_class = DeviceSerializer

    permission_classes = (IsAdminOrReadOnly, )


class DeviceInfoViewSet(viewsets.ModelViewSet):

    queryset = DeviceInfo.objects.all()
    serializer_class = DeviceInfoSerializer

    permission_classes = (IsAdminOrReadOnly, )


class BasketViewSet(viewsets.ModelViewSet):

    queryset = Basket.objects.all()
    serializer_class = BasketSerializer

    permission_classes = (IsOwner, )



class RatingViewSet(viewsets.ModelViewSet):

    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class TypeBrendViewSet(viewsets.ModelViewSet):

    queryset = TypeBrend.objects.all()
    serializer_class = TypeBrendSerializer

    permission_classes = (IsAdminOrReadOnly, )
