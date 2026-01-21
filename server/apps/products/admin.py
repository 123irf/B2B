from django.contrib import admin
from import_export import resources, fields
from import_export.widgets import ForeignKeyWidget
from import_export.admin import ImportExportModelAdmin
from apps.products.models import Product, Brand


class ProductResource(resources.ModelResource):
    brand = fields.Field(
        column_name='brand',
        attribute='brand',
        widget=ForeignKeyWidget(Brand, 'name')
    )

    class Meta:
        model = Product
        fields = (
            'name',
            'price',
            'description',
            'image_url',
            'is_active',
            'stock_status',
            'brand',
        )
        import_id_fields = ()

    def before_import_row(self, row, **kwargs):
        brand_name = row.get('brand')
        if brand_name:
            Brand.objects.get_or_create(name=brand_name.strip())


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Product)
class ProductAdmin(ImportExportModelAdmin):
    resource_class = ProductResource
    list_display = ('name', 'price', 'is_active', 'stock_status', 'brand')
    
    search_fields = ('name', 'description')
