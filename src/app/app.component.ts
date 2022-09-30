import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { Player } from './interface/player';
import { PlayerService } from './service/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  title = 'jest-angular';
  players: Player[] = [];
  isOpen = false;
  overlayRef: OverlayRef | undefined;
      
  constructor(private playerService: PlayerService,  private overlay: Overlay) {

  }
  ngOnInit(): void {
    this.getPlayers();
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
  }

  getPlayers(){ 
    console.log('invoking service');
    this.playerService.getPlayers('20').subscribe(res=>{
      console.log(res);
      this.players = res;
    });
  }

  

    closeModal(): void {
      this.overlayRef?.detach();
    }
  
    showAddPlayer(): void {
      this.closeModal();
      const testPortal = new ComponentPortal(AddPlayerComponent);
      this.playerService.setSelectedPlayer(this.defaultPlayer());
      this.overlayRef?.attach(testPortal)
    }
    defaultPlayer(): Player {
      return {attack:0,defense:0,firstName:'',id:0,idAuthor:20,idPosition:0,image:'',lastName:'',skills:0};
  
    }
}

