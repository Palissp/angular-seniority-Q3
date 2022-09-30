import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
// Rutas
import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JugadorTarjetaComponent } from './components/jugador-tarjeta/jugador-tarjeta.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, CrearJugadorComponent, EquipoComponent, JugadorTarjetaComponent, JugadorComponent, BuscadorComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {}
