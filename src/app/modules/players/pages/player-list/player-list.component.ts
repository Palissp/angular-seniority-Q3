import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/modules/core/services/player/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players = [ 1, 2, 3];

  constructor(
    public playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers('25').subscribe((data) => console.log('data', data))
  }

}
