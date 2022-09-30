import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interface/player';
import { PlayerService } from 'src/app/service/player.service';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent implements OnInit {
  @Input()
  player: Player | undefined;
  overlayRef: OverlayRef | undefined;
      
  constructor(private playerService: PlayerService,  private overlay: Overlay) {

  }


  ngOnInit(): void {
    
    const positionStrategy = this.overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();

  this.overlayRef = this.overlay.create({
    
    backdropClass: 'backdrop',
    panelClass: 'panel',
    hasBackdrop: true,
    positionStrategy
  });
  this.overlayRef.backdropClick().subscribe(() => {
    this.overlayRef?.dispose();
  });
  }

  closeModal(): void {
    this.overlayRef?.detach();
  }

  showAddPlayer(): void {
    this.closeModal();
    const testPortal = new ComponentPortal(AddPlayerComponent);
    this.playerService.setSelectedPlayer(this.player as Player);
    this.overlayRef?.attach(testPortal)
  }





}
