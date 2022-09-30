import { PlayerModel } from './../../../../core/models/player.model';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/modules/home/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player!: PlayerModel;

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.playerService.deletePlayer(this.player).subscribe(res => {
      console.log("usuairo eliminado")
    })
  }

}
