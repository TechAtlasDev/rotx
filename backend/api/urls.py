# Creando las vistas
from django.urls import path
from .views import *

urlpatterns = [
  path("encode", ViewEncode.as_view()),
  path("decode", ViewDecode.as_view())
]