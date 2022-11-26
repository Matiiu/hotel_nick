import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'descipcion', component: DescripcionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
