import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Node } from '../models/empleados.model'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  public nombre: string;
  dataSource: Node[]
  empleados: any[];
  loading = true;
  displayedColumns: string[] = ['nombre', 'sueldo','puesto'];
  

 
  constructor(
    private apollo:Apollo
  ) {
    this.empleados=[]
    this.nombre=''
    this.dataSource=[]
   }

  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`
        query {
          allEmpleados {
          edges{
            node{
              id,
              nombre,
              salario,
              puesto
            }
            }
          }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
         // console.log(data.allEmpleados.edges[0])
         this.empleados = data.allEmpleados.edges
        this.dataSource = data.allEmpleados.edges
        
        console.log(this.empleados.length.toString())
  
        }
      );
  }
}
