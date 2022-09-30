import { Component, OnInit } from "@angular/core";
import { EMPTY_PLAYER } from "../../utils";
import { Player } from "../../interfaces";
import { PlayerService } from "../../services";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.scss"],
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  currentSelectedPlayer: Player = { ...EMPTY_PLAYER };
  searchPlayerText: string = "";
  isShowingPlayerForm: boolean = false;

  constructor(private readonly _playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this._playerService.getPlayers().subscribe((data) => {
      this.players = [...data];
    });
  }

  setCurrentPlayer(player: Player) {
    this.isShowingPlayerForm = true;
    this.currentSelectedPlayer = player;
  }

  deletePlayer(player: Player) {
    this._playerService.deletePlayer(player.id!).subscribe((_) => {
      this.getPlayers();
    });
  }

  onSubmitFormSuccess() {
    this.getPlayers();
  }

  showPlayerForm() {
    this.currentSelectedPlayer = { ...EMPTY_PLAYER };
    this.isShowingPlayerForm = true;
  }

  hidePlayerForm() {
    this.currentSelectedPlayer = { ...EMPTY_PLAYER };
    this.isShowingPlayerForm = false;
  }
}
