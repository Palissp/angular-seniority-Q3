import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './components/slider/slider.component';
import {ComponentDComponent} from './components/component-d/component-d.component';
import {MainViewComponent} from './views/main-view/main-view.component';
import {PlayerCardComponent} from './components/player-card/player-card.component';
import {ModalComponent} from "./components/modal/modal.component";
import { PlayerFormComponent } from './components/player-form/player-form.component';

@NgModule({
    declarations: [AppComponent, SliderComponent, ComponentDComponent, MainViewComponent, PlayerCardComponent, ModalComponent, PlayerFormComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
