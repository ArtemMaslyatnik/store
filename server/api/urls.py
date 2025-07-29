from django.urls import include, path
from api import views
from rest_framework.routers import DefaultRouter

app_name = 'api'

# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'user', views.UserViewSet,
                basename='User')
router.register(r'device', views.DeviceViewSet,
                basename='Device')
router.register(r'dviceinfo', views.DeviceInfoViewSet,
                basename='DeviceInfo')
router.register(r'basket', views.BasketViewSet,
                basename='Basket')
router.register(r'type', views.TypeViewSet,
                basename='Type')
router.register(r'brand',  views.BrandViewSet,
                basename='Brand')
router.register(r'rating', views.RatingViewSet,
                basename='Rating')
router.register(r'typebrend', views.TypeBrendViewSet,
                basename='TypeBrend')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
