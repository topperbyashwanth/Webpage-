from django.urls import path,include
from .import views
from rest_framework import routers
from .viewsets import *

router = routers.SimpleRouter()
router.register('pgdata',pgdataViewsets,basename="pgdata")
router.register('customerdata',customerdataViewsets,basename="customerdata")


urlpatterns=[
    path('',views.home,name="home"),
    path('firstpage',views.firstpage,name="firstpage"),
    path('api/v3/',include(router.urls))
]


