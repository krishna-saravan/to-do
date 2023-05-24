from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_todos, name= 'all_todos'),
    
    # authentication urls below
    path('register/', views.register, name= 'user_registeration'),
    path('login/', views.login_view, name= 'user_login'),
    
    path('routes/', views.get_Routes, name= 'routes'),
    path('create/', views.create_todo, name= 'create_todo'),
    path('<int:pk>/', views.get_todo, name= 'todo'),
    path('edit/<int:pk>/', views.edit_todo, name= 'edit_todo'),
    path('delete/<int:pk>/', views.delete_todo, name= 'delete_todo'),
    path('toggle/<int:pk>/', views.toggle_todo_completed, name='toggle-todo-completed'),
]