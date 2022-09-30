import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/atoms/card/card.component';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { ModalComponent } from './components/atoms/modal/modal.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { SelectComponent } from './components/atoms/select/select.component';



@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    PlayerCardComponent,
    ModalComponent,
    SliderComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    CardComponent,
    PlayerCardComponent,
    ModalComponent,
    SliderComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
