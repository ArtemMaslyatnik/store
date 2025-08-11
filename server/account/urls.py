from django.urls import path
from account import views

app_name = "account"

urlpatterns = [
    path('login/', views.LoginView.as_view(), name="login"),
    path('register', views.registerView),
    path('refresh-token', views.CookieTokenRefreshView.as_view()),
    path('logout', views.logoutView),
    path("user", views.user),
]