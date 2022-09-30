import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalJugadorComponent } from './components/modal-jugador/modal-jugador.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, EquipoComponent, ModalJugadorComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EquipoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
