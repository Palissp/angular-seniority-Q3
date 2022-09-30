import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})
export class SearchPlayerComponent implements OnInit {

  constructor(private readonly state: StateService) { }

  ngOnInit(): void {
  }

  onKeyUpSearch(event:any) {
    if (event.target.value) {
      let listPlayerFilter: Player[] = this.state.playerListAPI.filter(player => player.firstName.toLowerCase().includes(event.target.value.toLowerCase()));
      this.state.setPlayerList(listPlayerFilter);
    } else {
      this.state.setPlayerList(this.state.playerListAPI);
    }
  }
}
