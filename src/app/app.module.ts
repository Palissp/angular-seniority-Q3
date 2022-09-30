import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { ListPlayerComponent } from './home/team/components/list-player/list-player.component';
import { AddPlayerComponent } from './home/team/components/add-player/add-player.component';
import { HttpClientModule } from '@angular/common/http';
// import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [AppComponent, SliderComponent, ListPlayerComponent, AddPlayerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
