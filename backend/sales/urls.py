from django.urls import path

from .views import FruitsAPIView

urlpatterns = [
    path("fruits/", FruitsAPIView.as_view()),
]
