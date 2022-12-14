import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { GotyComponent } from './goty/goty.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    InicioComponent,
    GotyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
