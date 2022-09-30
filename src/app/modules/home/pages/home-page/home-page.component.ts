import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerModel } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  formCreatePlayer: FormGroup = new FormGroup({})
  filterWord = "";
  players: Array<PlayerModel> = [
  ]

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
    this.formCreatePlayer = new FormGroup({
     firstName: new FormControl('', [Validators.required]),
     lastName: new FormControl('', [Validators.required]),
     image: new FormControl('', [Validators.required]),
     attack: new FormControl(50, [Validators.required]),
     defense: new FormControl(50, [Validators.required]),
     skills: new FormControl(50, [Validators.required]),
     idAuthor: new FormControl(6, [Validators.required]),
     idPosition: new FormControl(1, [Validators.required])
     
    })

    this.getListTodo();
  }


  getListTodo() {
    this.playerService.getPlayerList()?.subscribe(resp => {
      this.players = resp;
    });
  }

   createPlayer() {
    const player = this.formCreatePlayer.value;
    this.playerService.addPlayer(player).subscribe(res => {
      console.log("Usuario Creado");
      console.log(res)
    })
  }

}
