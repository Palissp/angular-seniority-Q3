import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';




@Component({
  selector: 'app-player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerCardComponent{
  @Input() player!: Player;

  constructor(private servicio: PlayerService) {

    
   }

  onDelete(){
   this.servicio.deletePlayer(this.player.id).subscribe(response => {
      alert('Jugador eliminado exitosamente');
    });
  }

  onEdit(){
    this.servicio.playerToEdit.next(this.player);
    document.getElementById('newPlayer')!.style.display = 'block';
  }
}