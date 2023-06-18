from django.db import models


class Category(models.Model):
    category_name = models.CharField(max_length=124, verbose_name='Название категории')

    class Meta:
        ordering = ('category_name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категорий'
        abstract = True

    def __str__(self):
        return self.category_name


class ProductCategory(Category):
    pass


class AnimalCategory(Category):
    pass


class Product(models.Model):
    product_name = models.CharField(max_length=64, verbose_name='Название продукта')
    description = models.TextField(blank=False, verbose_name='Описание')
    product_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, verbose_name='Название категории')
    animal_category = models.ForeignKey(AnimalCategory, on_delete=models.CASCADE, verbose_name='Животное')
    shopping_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ('product_name',)
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.product_name