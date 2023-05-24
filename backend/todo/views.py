from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todo_model
from .serializers import todo_serializer, LoginSerializer

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# Create your views here.

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    # performing validation below
    
    # creating user with the credentials
    user = User.objects.create_user(username=username, password=password)
    user.save()
    
    return Response({'User is created sucessfully'})

@api_view(['POST'])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    login(request, user)
    return Response("Logged in")


@api_view(['GET'])
def get_Routes(request):
    Routes = [
        {
            'Endpoint': '/todos/',
            'method': 'GET',
            'description': 'gives all the dotos'
        }
    ]
    
    return Response(Routes)

@api_view(['GET'])
def get_all_todos(request):
    todos = Todo_model.objects.all()
    serializer = todo_serializer(todos, many = True)
    return Response(serializer.data)



@api_view(['POST'])
def create_todo(request):
        data = request.data
        serializer = todo_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def get_todo(request,pk):
    todo = Todo_model.objects.get(id = pk)
    serializer = todo_serializer(todo, many = False)
    return Response(serializer.data)
    
    
    
@api_view(['PUT'])
def edit_todo(request,pk):
    data = request.data
    todo = Todo_model.objects.get(id = pk)
    serializer = todo_serializer(todo, data=data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({'Invalid data or request'})
    

@api_view(['PATCH'])
def toggle_todo_completed(request, pk):
    try:
        todo = Todo_model.objects.get(id=pk)
    except Todo.DoesNotExist:
        return Response({'error': 'Todo not found'}, status=404)

    todo.completed = not todo.completed
    todo.save()

    return Response({'message': 'Todo status toggled successfully'})


@api_view(['DELETE'])
def delete_todo(request, pk):
    todo = Todo_model.objects.get(id = pk)
    todo.delete()
    return Response({'task is deleted'})