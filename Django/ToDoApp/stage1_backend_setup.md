
# Stage 1: Django + MySQL Backend Setup


## 1. Install Dependencies

```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install django djangorestframework mysqlclient
```

## 2. Create Project and Create App for user

```bash
django-admin startproject todo_project
cd todo_project
python manage.py startapp todo_app
```

## 3. MySQL Configuration in `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'todo_db',
        'USER': 'your_mysql_user',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

> Make sure you create the `todo_db` database in MySQL before running migrations.

## 4. Add Apps to `INSTALLED_APPS`

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'todo_app',
]
```

## 5. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```
