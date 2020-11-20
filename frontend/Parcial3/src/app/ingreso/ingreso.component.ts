import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from "apollo-angular";
import {Router} from "@angular/router"
import gql from "graphql-tag";
import { Node } from '../models/empleados.model'

const createEmpleados = gql`
  mutation createEmpleados($nombre: String!, $salario: Float!, $puesto: String!)
  {
    createEmpleados(nombre: $nombre, salario: $salario, puesto: $puesto)
    {
      empleados{
        nombre,
        salario,
        puesto
      }
   
    }
  }
`;

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  public nom:string
  public suel:number
  public pues:string
  validarForm: FormGroup;
  nombreFormControl = new FormControl()
  sueldoFormControl = new FormControl()
  puestoFormControl = new FormControl()
  constructor(
    private apollo:Apollo,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.validarForm = this.formBuilder.group({
      nombre:this.nombreFormControl,
      sueldo:this.sueldoFormControl,
      puesto:this.puestoFormControl,
    }),
    this.nom=''
    this.suel=0
    this.pues=''
   }

   crear()
   {
   
     this.apollo
.mutate({
mutation:createEmpleados,
variables: {
nombre: this.nombreFormControl.value,
salario: this.sueldoFormControl.value,
puesto: this.puestoFormControl.value
}
})
.subscribe(
({ data }) => {
console.log(data)
this._router.navigate(['/formulario'])
}
);

   }

  ngOnInit() {

  }
}
