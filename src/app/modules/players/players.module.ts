import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
