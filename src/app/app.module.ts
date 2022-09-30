import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TeamWrapperComponent } from './components/team-wrapper/team-wrapper.component';

@NgModule({
  declarations: [
    AppComponent, 
    SliderComponent, 
    SearchPlayerComponent, 
    CardPlayerComponent,
     AddPlayerComponent, 
     TeamWrapperComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
