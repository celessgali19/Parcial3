from django.contrib import admin

from empleados.models import Puesto, Empleados


admin.site.register(Puesto)

admin.site.register(Empleados)