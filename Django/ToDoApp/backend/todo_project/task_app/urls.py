from django.urls import path
from .views import task_list, task_create, task_update, task_delete

urlpatterns = [
    path('tasks/<int:user_id>/', task_list, name='task-list'),
    path('tasks/create/', task_create, name='task-create'),
    path('tasks/update/<int:task_id>/', task_update, name='task-update'),
    path('tasks/delete/<int:task_id>/', task_delete, name='task-delete'),
]
