from django.urls import path
from account import views

app_name = "account"

urlpatterns = [
    path('login/', views.LoginView.as_view(), name="login"),
    path('register/', views.RegisterView.as_view(), name="register"),
    path('refresh-token/', views.CookieTokenRefreshView.as_view()),
    path('logout/', views.LogoutView.as_view(), name="logout"),
]