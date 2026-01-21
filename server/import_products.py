import csv
import os
import django

# Setup Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
django.setup()

from apps.products.models import Product, Brand

with open("products.csv", newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)

    for row in reader:
        brand, _ = Brand.objects.get_or_create(
            name=row["brand"].strip()
        )

        Product.objects.create(
            name=row["name"].strip(),
            price=row["price"],
            description=row["description"],
            image_url=row["image_url"],
            is_active=row["is_active"].lower() == "true",
            stock_status=row["stock_status"],
            product=brand
        )

print("✅ Products imported successfully")
