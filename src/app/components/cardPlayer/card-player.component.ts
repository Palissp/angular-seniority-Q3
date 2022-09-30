import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player-interface';
import { PlayerServiceService } from 'src/app/services/player-service/player-service.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {
  players$: Observable<Player[]>;


  constructor( private playerService: PlayerServiceService) {
    this.players$ = this.playerService.getPlayer();
   }

  ngOnInit(): void {
  }
  
}
