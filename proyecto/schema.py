import graphene

import empleados.schema


class Query(empleados.schema.Query, graphene.ObjectType):

    pass

schema = graphene.Schema(query=Query)