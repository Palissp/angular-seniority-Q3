import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input()
  player!: Player;

  constructor(
    private readonly playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onClickButtonEdit(){

  }

  onClickButtonDelete(player: Player){
    if(confirm('Eliminar jugador ' + player.firstName + '?')) {
       this.playerService.deletePlayer(player.id)?.subscribe(()=>{
        this.playerService.getPlayers().subscribe();
       });
    }
  }

}
