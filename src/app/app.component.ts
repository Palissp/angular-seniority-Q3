import { Component } from '@angular/core';
import {PlayerService} from "./services/player.service";
import {StateService} from "./services/state.service";
import {PlayerDToInterface} from "./interfaces/playerDTo.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jest-angular';
  searchText = '';
  listPlayers: PlayerDToInterface[] = [];
  constructor(
      private readonly playerService: PlayerService,
      private readonly state: StateService,

  ) { }
  ngOnInit(): void {
    this.getPlayersTodo();
    this.state.playerList$.subscribe(resp => {
      this.listPlayers = resp;
    });
  }
  getPlayersTodo() {
    this.playerService.getPlayer().subscribe();
  }
  openDialog(): void {
  }
 }
