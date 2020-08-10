from django.urls import path

from .views import SalesInfoListCreateView, SalesInfoAPIView

urlpatterns = [
    path("", SalesInfoListCreateView.as_view()),
    path("<int:pk>/", SalesInfoAPIView.as_view()),
]
