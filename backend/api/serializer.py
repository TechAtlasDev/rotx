# Importando modulos
from rest_framework.serializers import Serializer
from rest_framework import serializers

from .lib.rot import rot

class CriptoSerializer(Serializer):
    text = serializers.CharField(max_length=100)
    key = serializers.IntegerField()

    def convertir(self, text, key):
        cipher = rot(key=key, text=text)
        return cipher.encode()