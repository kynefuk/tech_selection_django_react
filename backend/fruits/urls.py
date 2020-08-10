from django.urls import path

from .views import FruitsListCreateView, FruitsAPIView

urlpatterns = [
    path("", FruitsListCreateView.as_view()),
    path("<int:pk>/", FruitsAPIView.as_view()),
]
