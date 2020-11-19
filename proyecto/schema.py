import graphene

import empleados.schema


class Query(empleados.schema.Query, graphene.ObjectType):

    pass
class Mutation(empleados.schema.Mutation, graphene.ObjectType):
    pass
schema = graphene.Schema(query=Query, mutation=Mutation)