
# Stage 3: `todo_task` App – CRUD for Tasks

## ✅ Goal
Create a `todo_task` app to handle CRUD operations (Create, Read, Update, Delete) for to-do tasks linked to registered users.

---

## 1. Create the Task App

```bash
python manage.py startapp todo_task
```

---

## 2. Register the App in `settings.py`

```python
INSTALLED_APPS = [
    ...
    'todo_task',
]
```

---

## 3. Task Model – `todo_task/models.py`

```python
from django.db import models
from todo_user.models import User  # Replace with actual user app

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return self.title
```

---

## 4. Task Serializer – `todo_task/serializers.py`

```python
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
```

---

## 5. Task Views – `todo_task/views.py`

```python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def task_list(request, user_id):
    tasks = Task.objects.filter(user_id=user_id)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def task_create(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Task created'})
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def task_update(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=404)
    
    serializer = TaskSerializer(task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Task updated'})
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def task_delete(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
        task.delete()
        return Response({'message': 'Task deleted'})
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=404)
```

---

## 6. Task URLs – `todo_task/urls.py`

```python
from django.urls import path
from .views import task_list, task_create, task_update, task_delete

urlpatterns = [
    path('tasks/<int:user_id>/', task_list, name='task-list'),
    path('tasks/create/', task_create, name='task-create'),
    path('tasks/update/<int:task_id>/', task_update, name='task-update'),
    path('tasks/delete/<int:task_id>/', task_delete, name='task-delete'),
]
```

### Update `todo_project/urls.py`

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('todo_user.urls')),   # User app
    path('', include('todo_task.urls')),   # Task app
]
```

---

## 7. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 8. Test APIs with Postman

### ✅ Create Task
**POST** `http://127.0.0.1:8000/tasks/create/`

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "user": 1
}
```

---

### ✅ Get Tasks for User
**GET** `http://127.0.0.1:8000/tasks/1/`

---

### ✅ Update Task
**PUT** `http://127.0.0.1:8000/tasks/update/1/`

```json
{
  "title": "Buy groceries and fruits",
  "description": "Milk, eggs, bananas",
  "completed": true,
  "user": 1
}
```

---

### ✅ Delete Task
**DELETE** `http://127.0.0.1:8000/tasks/delete/1/`

---

## ✅ Done!
You now have a fully functional backend for:
- User Registration & Login
- Task Management (CRUD)
