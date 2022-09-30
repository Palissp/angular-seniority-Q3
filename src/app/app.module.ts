import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './components/cardPlayer/card-player.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { PageComponent } from './home/page/page.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, CardPlayerComponent, PageComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
