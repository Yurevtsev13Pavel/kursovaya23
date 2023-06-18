from django.contrib import admin
from .models import Product


# @admin.register(Category) AnimalCategory, ProductCategory (сам класс копируется два раза)
# class CategryAdmin(admin.ModelAdmin):
#     list_display = ('category_name', )
#     search_fields = ('category_name',)
# удалить


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'shopping_count', 'animal_category', 'product_category')
    search_fields = ('product_name',)
    list_filter = ('animal_category', 'product_category')


