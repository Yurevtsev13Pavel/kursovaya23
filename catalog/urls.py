from django.urls import path

#from catalog.views import ProductList2View, product_details_view, ProductListView
from catalog.views import Main_View, Prof_View

app_name = 'catalog'

urlpatterns = [
    #path('<int:product_id>/', product_details_view, name='detail'),
    #path('list/', ProductListView.as_view(), name='list'),
    #path('ajax_list/', ProductList2View.as_view(), name='ajax_list'),
    path('', Main_View, name='main'),
    path('prof/', Prof_View, name='prof')
]