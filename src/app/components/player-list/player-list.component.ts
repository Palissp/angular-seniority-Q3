import {Component, Input, OnInit} from '@angular/core';
import {StateService} from "../../services/state-service/state.service";
import {IPlayer} from "../../interfaces/player.interface";
import {PlayerService} from "../../services/player-service/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playerList: IPlayer[] | undefined = []
  @Input() searchString: string = ''

  constructor(
      private state: StateService,
      private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayerList()
    this.state.playerList$.subscribe(resp => this.playerList = resp);
  }

  getPlayerList() {
    this.playerService.getPlayers()?.subscribe()
  }

  verifyShow(firstName: string, lastName: string) {
    if (this.searchString === "") {
      return true
    }
    return this.searchString !== "" && (firstName + lastName).toLowerCase().includes(this.searchString.trim().toLowerCase());

  }
}
