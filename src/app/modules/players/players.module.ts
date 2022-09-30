import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './pages/player-list/player-list.component';


@NgModule({
  declarations: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
