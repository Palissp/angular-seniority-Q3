import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/model/player.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPlayer: Array<Players> = new Array<Players>()
  copyListPlayer: Array<Players> = new Array<Players>()
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.allPlayer()
  }

 

  allPlayer() {
    this.playerService.getPlayer().subscribe((response) => {
      this.listPlayer = response;
      this.copyListPlayer = response
    })
  }


}
