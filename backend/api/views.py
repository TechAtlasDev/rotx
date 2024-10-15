from django.shortcuts import render

from rest_framework import generics, views
from rest_framework.response import Response
from rest_framework import status

from .serializer import CriptoSerializer

# Create your views here.
class ViewEncode(views.APIView):
    def post(self, request):
        serializer = CriptoSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            text = data["text"]
            key = data["key"]

            text = serializer.convertir(text=text, key=key)
            return Response({"result": text}, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class ViewDecode(views.APIView):
    def post(self, request):
        serializer = CriptoSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            text = data["text"]
            key = data["key"]

            text = serializer.convertir(text=text, key=-key)
            return Response({"result": text}, status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)