import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-team-wrapper',
  templateUrl: './team-wrapper.component.html',
  styleUrls: ['./team-wrapper.component.scss']
})
export class TeamWrapperComponent implements OnInit {

  listPlayers: Player[] = [];
  showModal:boolean = false;

  constructor(
    private readonly state: StateService,
    private readonly playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.getListPlayers();
    this.state.playerList$.subscribe(resp => this.listPlayers = resp);
  }

  getListPlayers() {
    this.playerService.getPlayers().subscribe();
  }

  onClickButtonAdd(){
    this.showModal =  true;
    setTimeout(() => {
      const modal = document.getElementById('myModal');
      if(modal){
        modal.style.display = 'block';
      }
    },400);
  }
}
