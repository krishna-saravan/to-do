from rest_framework import serializers
from django.contrib.auth import authenticate
from.models import Todo_model

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, attrs):
        user = authenticate(username=attrs['username'], 
        password=attrs['password'])
        if not user:
            raise serializers.ValidationError('Incorrect username or password.')
        if not user.is_active:
            raise serializers.ValidationError('User is disabled.')
        return {'user': user}
    
    

class todo_serializer(serializers.ModelSerializer):
    class Meta:
        model = Todo_model
        fields = '__all__'