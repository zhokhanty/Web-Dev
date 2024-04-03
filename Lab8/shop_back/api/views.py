from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price} for product in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = [{'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active}]
        return JsonResponse(data, safe=False)
    except product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        data = [{'id': category.id, 'name': category.name}]
        return JsonResponse(data, safe=False)
    except category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    
def category_products_list(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        data = [{'id': product.id, 'name': product.name, 'price': product.price} for product in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)