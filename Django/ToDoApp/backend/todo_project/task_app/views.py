from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


@api_view(['POST'])
def task_create(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Task created'})
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def task_list(request, user_id):
    tasks = Task.objects.filter(user_id=user_id)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

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