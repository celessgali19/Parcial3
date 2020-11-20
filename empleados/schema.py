import graphene
from graphene import relay, ObjectType
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import Puesto, Empleados

class PuestoNode(DjangoObjectType):
    class Meta:
        model = Puesto
        filter_fields = ['nombre']
        interfaces = (relay.Node, )

class EmpleadosNode(DjangoObjectType):
    class Meta:
        model = Empleados
        # Permite un filtrado mas avanzado
        filter_fields = {
            'nombre': ['exact', 'icontains', 'istartswith'],
            'salario': ['exact', 'icontains'],
            'puesto': ['exact'],
            'puesto__nombre': ['exact'],
        }
        interfaces = (relay.Node, )


class Query(object):
    puesto = relay.Node.Field(PuestoNode)
    all_puestos = DjangoFilterConnectionField(PuestoNode)

    empleados = relay.Node.Field(EmpleadosNode)
    all_empleados = DjangoFilterConnectionField(EmpleadosNode)

    #crear puesto
class CreatePuesto(graphene.Mutation):

    class Arguments:
        
        nombre = graphene.String()

    puesto = graphene.Field(PuestoNode)

    def mutate(self, info, nombre):
        puesto = Puesto.objects.create(nombre=nombre)
     
        return CreatePuesto(puesto=puesto)


#Crear empleado

class CreateEmpleados(graphene.Mutation):

  class Arguments:
    nombre = graphene.String()
    salario = graphene.Float()
    puesto = graphene.String()
 

  empleados = graphene.Field(EmpleadosNode)


  def mutate(self, info, nombre, salario, puesto):
    empleados = Empleados.objects.create(
      nombre = nombre,
      salario = salario,
      puesto = puesto
    )
    
    return CreateEmpleados(
      empleados=empleados
    )



class Mutation(graphene.ObjectType):
  create_puesto = CreatePuesto.Field()
  create_empleados = CreateEmpleados.Field()