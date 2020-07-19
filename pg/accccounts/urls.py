from django.urls import path
from . import views

urlpatterns=[
    path('register',views.register,name="register"),
    path('logout',views.logout,name="logout"),
    path('login',views.login,name="login"),
    path('base',views.base,name="base"),
    #path('process',views.process,name="process"),
]

