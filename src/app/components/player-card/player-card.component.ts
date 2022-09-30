import { Component, Input } from '@angular/core';
import { Player } from '../../config/player.interface';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent{
  @Input() player!: Player;

  constructor(private playersService: PlayersService) { }

  onDelete(){
    this.playersService.deletePlayer(this.player.id).subscribe(response => {
      alert('Jugador eliminado exitosamente');
    });
  }

  onEdit(){
    this.playersService.playerToEdit.next(this.player);
    document.getElementById('playerModal')!.style.display = 'block';
  }
}
