import {Component, Input, OnInit} from '@angular/core';
import {IPlayer} from "../../interfaces/player.interface";

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: IPlayer = {
    image: "",
    firstName: "",
    attack: 0,
    defense: 0,
    idAuthor: 0,
    id: 0,
    idPosition: 0,
    lastName: "",
    skills: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  editPlayer(player: IPlayer) {

  }

  erasePlayer(player: IPlayer) {
    
  }
}
