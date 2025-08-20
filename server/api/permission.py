from rest_framework import permissions
from rest_framework_simplejwt import tokens
from account.models import Account

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user


class ReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS

    def has_object_permission(self, request, view, obj):
        return request.method in permissions.SAFE_METHODS


class IsOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
 
        user = get_user_by_token(request.COOKIES.get('access'))

        return obj.user == user
    


def get_user_by_token(token):
    try:
        id = tokens.AccessToken(token).payload.get('user_id')
        User = Account.objects.get(id=id)
        user = User
    except:
        user = 0
    return user
