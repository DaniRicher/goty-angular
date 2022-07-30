import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GotyComponent } from './goty/goty.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'goty', component: GotyComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
