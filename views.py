from django.shortcuts import render,redirect
from .models import upload

# Create your views here.
def home(request):
    if request.method=="POST":
        user=request.POST['user'];
        image=request.FILES['image'];
        upload.objects.create(user=user,image=image);
        files=upload.objects.all();
        return redirect('foundation');
    else:
        return render(request,'image.html')

def foundation(request):
    files=upload.objects.all();
    return render(request,'foundation.html',{'files':files})

