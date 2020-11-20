import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {FlexLayoutModule} from "@angular/flex-layout";


import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button'; 

import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatTableModule} from '@angular/material/table';
import { IngresoComponent } from './ingreso/ingreso.component'; 
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    GraphQLModule,
    HttpClientModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule

    
  ],


  providers: [{provide: MAT_DATE_LOCALE, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
