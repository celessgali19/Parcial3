import graphene
from graphene import relay, ObjectType
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import Puesto, Empleados

class PuestoNode(DjangoObjectType):
    class Meta:
        model = Puesto
        filter_fields = ['nombre', 'empleados']
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

    #crear empleado
class CreatePuesto(graphene.Mutation):

    class Arguments:
        
        nombre = graphene.String()

    puesto = graphene.Field(PuestoNode)

    def mutate(self, info, nombre):
        puesto = Puesto.objects.create(nombre=nombre)
     
        return CreatePuesto(puesto=puesto)



class Mutation(graphene.ObjectType):
  create_puesto = CreatePuesto.Field()