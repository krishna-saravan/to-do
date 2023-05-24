from django.db import models

# Create your models here.

class Todo_model(models.Model):
    id = models.AutoField(primary_key=True, null= False, blank= False)
    task = models.CharField(max_length=230, null= False, blank= False)
    completed = models.BooleanField(null = False, blank= False, default= False)
    created_At = models.DateTimeField(null=False, blank=False, auto_now_add=True)
    
    def __str__(self):
        return self.task
