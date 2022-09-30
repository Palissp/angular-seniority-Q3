import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './components/slider/slider.component';
import {CardComponent} from './components/card/card.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { CreateUpdatePlayerComponent } from './components/create-update-player/create-update-player.component';

@NgModule({
    declarations: [AppComponent, SliderComponent, CardComponent, CreateUpdatePlayerComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
