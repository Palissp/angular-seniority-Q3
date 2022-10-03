import { FiltroPorNombrePipe } from './pipes/filtro-por-letra.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerCardComponent } from './components/player/player.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';


@NgModule({
  declarations: [AppComponent, SliderComponent,FiltroPorNombrePipe,PlayerCardComponent,NewPlayerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
