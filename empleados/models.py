from django.db import models


class Puesto(models.Model):
    
    nombre = models.CharField(max_length=100)


    def __str__(self):

        return self.nombre


class Empleados(models.Model):

    nombre = models.CharField(max_length=100)

    salario = models.FloatField(max_length=100)

    puesto = models.CharField(max_length=100)

   # puesto = models.ForeignKey(

    #    Puesto, related_name="empleados", on_delete=models.CASCADE

    #)


    def __str__(self):

        return self.nombre

