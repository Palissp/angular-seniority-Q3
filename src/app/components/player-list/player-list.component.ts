import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/player.service';
import { Player } from '../../player';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players!: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.obtenerPlayers();
  }

  obtenerPlayers() {
    this.playerService.obtenerListaPlayer().subscribe(dato => { this.players = dato; })
  }


}
