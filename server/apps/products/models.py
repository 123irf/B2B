from django.db import models
class Brand(models.Model):
    name=models.CharField(max_length=100)
  

# Create your models here.
class Product(models.Model):
    STOCK_STATUS=(
        ('in_stock','In Stock'),
        ('pre_order','Pre Order'),
        ('inquiry','Inquiry'),
    )
    name=models.CharField(max_length=100)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField()
    image_url=models.URLField()
    is_active=models.BooleanField(default=True)
    brand=models.ForeignKey(Brand, on_delete=models.CASCADE,related_name='products')
    stock_status=models.CharField(max_length=9, choices=STOCK_STATUS, default='in_stock')
    def __str__(self):
        return self.name
    