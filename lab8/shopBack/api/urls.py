from django.urls import path
from .views import ProductListView, ProductDetailView, CategoryListView, CategoryDetailView, CategoryProductsView


urlpatterns = [
    path('api/products/', ProductListView.as_view()),
    path('api/products/<int:pk>', ProductDetailView.as_view()),
    path('api/categories/', CategoryListView.as_view()),
    path('api/categories/<int:pk>', CategoryDetailView.as_view()),
    path('api/categories/<int:id>/products', CategoryProductsView.as_view())
]