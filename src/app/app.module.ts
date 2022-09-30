import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardJugadorComponent } from './components/card-jugador/card-jugador.component';
import { FormularioJugadorComponent } from './components/formulario-jugador/formulario-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {FullscreenOverlayContainer, OverlayContainer, OverlayModule} from '@angular/cdk/overlay';



@NgModule({
  declarations: [AppComponent, SliderComponent, CardJugadorComponent, FormularioJugadorComponent],
  imports: [BrowserModule,CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,OverlayModule],
  providers:  [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
