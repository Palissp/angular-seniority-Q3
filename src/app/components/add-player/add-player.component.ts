import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interface/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  
  selectedPlayer: Player = this.defaultPlayer();
  overlayRef: OverlayRef | undefined;
      
  constructor(private playerService: PlayerService,  private overlay: Overlay) {

  }


  ngOnInit(): void {
    this.playerService.getSelectedPlayer().subscribe(players=>{
      this.selectedPlayer= players.length>0?players[0]: this.defaultPlayer();
    });
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

  closeModal(): void {
    this.overlayRef?.detach();
  }

  showAddPlayer(): void {
    this.closeModal();
    const testPortal = new ComponentPortal(AddPlayerComponent);
    this.overlayRef?.attach(testPortal)
  }

  defaultPlayer(): Player {
    return {attack:0,defense:0,firstName:'',id:0,idAuthor:20,idPosition:0,image:'',lastName:'',skills:0};

  }
  savePlayer(){
    this.playerService.savePlayer(this.selectedPlayer).subscribe(res=>{
      alert('player saved successfully');
    });
    
  }
} 

