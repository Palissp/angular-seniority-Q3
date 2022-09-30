import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from '../../components/slider/slider.component';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlayersModule { }
