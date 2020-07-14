from django.db import models

# Create your models here.
class pgdata(models.Model):
    pgname=models.CharField(max_length=100)
    location=models.CharField(max_length=50)

    def __str__(self):
        return "%s located in %s" % (self.pgname,self.location)
        
class customerdata(models.Model):
    person=models.ForeignKey(pgdata,null=True,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name
