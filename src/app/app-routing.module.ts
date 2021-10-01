import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actorAlta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

const router: Routes = [

  {
    path: 'busqueda',
    component: BusquedaComponent
  },
  
  {
    path: 'peliculas/alta',
    component: PeliculaAltaComponent
  },

  {
    path: 'actor/alta',
    component: ActorAltaComponent
  },
  {
    path: 'actor/listado',
    component: ActorListadoComponent
  },
  {
    path: 'peliculas/listado',
    component: ActorListadoComponent
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: '', redirectTo: 'busqueda', pathMatch:'full'
  }
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(router)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
