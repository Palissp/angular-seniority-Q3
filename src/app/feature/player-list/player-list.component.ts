import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { Player } from '@models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  showModal = false;
  playerSelected: Player = new Player();

  constructor(
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.playerService.getPlayers().subscribe(res => {
      this.players = res;
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  editPlayer(player: Player) {
    this.playerSelected = player;
    this.openModal();
  }

  deletePlayer(player: Player) {
    this.playerService.deletePlayer(player).subscribe(res => {
      console.log(res)
    })
  }

}
