from django.urls import path

from .views import (
    product_list,
    product_detail,
    category_list,
    category_detail,
    category_products_list
)

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path('products/<int:id>/', product_detail, name='product_detail'),
    path('categories/', category_list, name='category_list'),
    path('category/<int:id>/', category_detail, name='category_detail'),
    path('categories/<int:id>/products', category_products_list, name='category_product_list')
]