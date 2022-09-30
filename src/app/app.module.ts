import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import {HttpClientModule} from "@angular/common/http";
import { PlayerPipe } from './pipes/player.pipe';
import { PlayerFormModalComponent } from './components/player-form-modal/player-form-modal.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, PlayerListComponent, PlayerCardComponent, PlayerPipe, PlayerFormModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
