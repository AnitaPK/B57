
# ✅ Stage 2: Register and Login with Custom User Model (No JWT)

---

## ✅ 1. Create `todo_user` App

```bash
python manage.py startapp todo_user
```

---

## ✅ 2. Define Custom User Model in `todo_user/models.py`

```python
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not username:
            raise ValueError("Username is required")
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(username, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

    @property
    def is_staff(self):
        return self.is_admin
```

---

## ✅ 3. Set It Globally in `settings.py`

```python
AUTH_USER_MODEL = 'todo_user.User'
```

Also make sure `todo_user` is added to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'todo_user',
]
```

---

## ✅ 4. Create Serializer in `todo_user/serializers.py`

```python
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
```

---

## ✅ 5. Create Views in `todo_user/views.py`

```python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import User
from .serializers import UserSerializer

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User registered successfully'})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        return Response({'message': 'Login successful', 'user_id': user.id})
    return Response({'message': 'Invalid credentials'}, status=400)
```

---

## ✅ 6. Add URLs

### `todo_user/urls.py`

```python
from django.urls import path
from .views import register, login

urlpatterns = [
    path('register/', register),
    path('login/', login),
]
```

### Add in `todo_project/urls.py`

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('todo_user.urls')),
]
```

---

## ✅ 7. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

## ✅ 8. Run Django Server
# In the terminal (inside your Django project folder):

```bash
python manage.py runserver
```

---

## ✅ 8. Test with Postman

### 🌐 Register User

- **Method**: POST  
- **URL**: `http://127.0.0.1:8000/register/`  
- **Body** → raw → JSON:

```json
{
  "username": "john",
  "password": "1234"
}
```

**Expected Response:**

```json
{
  "message": "User registered successfully"
}
```

---

### 🌐 Login User

- **Method**: POST  
- **URL**: `http://127.0.0.1:8000/login/`  
- **Body** → raw → JSON:

```json
{
  "username": "john",
  "password": "1234"
}
```

**Expected Response:**

```json
{
  "message": "Login successful",
  "user_id": 1
}
```
---

✅ Now your custom `User` model is correctly registered in Django and ready to be used in other apps (like `todo_task`) using:

```python
from django.contrib.auth import get_user_model
User = get_user_model()
```