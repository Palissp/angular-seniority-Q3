import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { PositionService } from './services/position.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    PlayerService,
    PositionService,
    
  ]
})
export class CoreModule { }
