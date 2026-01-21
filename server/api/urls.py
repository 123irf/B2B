from django.urls import path,include

urlpatterns=[
    path('api/',include('apps.products.urls')),
    path('api/accounts/',include('apps.accounts.urls')),
]