import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import {FullscreenOverlayContainer, OverlayContainer, OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent, SliderComponent, PlayerDataComponent, AddPlayerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,OverlayModule],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
