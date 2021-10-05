import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actorAlta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModule } from './firebase/firebase.module';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    NavbarComponent,
    TablaPaisesComponent,
    TablaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, 
    HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule,
    FirebaseModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
