import {Component, Input, OnInit} from '@angular/core';
import {PlayerDToInterface} from "../../interfaces/playerDTo.interface";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() player: PlayerDToInterface ={
    attack: 0,
    defense: 0,
    firstName: "",
    idAuthor: 0,
    idPosition: 0,
    image: "",
    lastName: "",
    skills: 0
  };

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
  }

  deletePlayer(){
    this.playerService.deletePlayer(this.player).subscribe(resp=>{console.log("eliminado")},error => {console.log("error")});
  }
}
