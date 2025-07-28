from rest_framework import viewsets

from api.models import Basket, Brand, Device, DeviceInfo, Rating, Type, TypeBrend, User
from api.serializers import BasketSerializer, BrandSerializer, DeviceInfoSerializer, DeviceSerializer, RatingSerializer, TypeBrendSerializer, TypeSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class DeviceViewSet(viewsets.ModelViewSet):

    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class DeviceInfoViewSet(viewsets.ModelViewSet):

    queryset = DeviceInfo.objects.all()
    serializer_class = DeviceInfoSerializer


class BasketViewSet(viewsets.ModelViewSet):

    queryset = Basket.objects.all()
    serializer_class = BasketSerializer


class TypeViewSet(viewsets.ModelViewSet):

    queryset = Type.objects.all()
    serializer_class = TypeSerializer


class BrandInfoViewSet(viewsets.ModelViewSet):

    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class RatingViewSet(viewsets.ModelViewSet):

    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class TypeBrendViewSet(viewsets.ModelViewSet):

    queryset = TypeBrend.objects.all()
    serializer_class = TypeBrendSerializer
