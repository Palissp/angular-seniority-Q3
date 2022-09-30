import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerComponent
  ],
  exports: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
