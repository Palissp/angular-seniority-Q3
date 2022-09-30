import { Component, OnInit } from '@angular/core';
import { RestService } from '../core/services/rest.service';
import { StateService } from '../core/services/state.service';
import { Player } from '../shared/models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPlayers: Player[] = []
  listSearch: Player[] = []
  showModal = false;

  constructor(private restService: RestService, private stateService: StateService) { }

  ngOnInit(): void {
    this.restService.getPlayerList().subscribe()
    this.restService.getPositions().subscribe()
    this.stateService.playerList$.subscribe(resp => {
      this.listPlayers = resp;
      this.listSearch = resp;
    });
  }

  onKeyUpSearch(event: any) {
    let eventStrig = event.target.value
    this.listSearch = this.listPlayers.filter(e => e.firstName.toLowerCase().includes(eventStrig.toLowerCase()) || e.lastName.toLowerCase().includes(eventStrig.toLowerCase()))
  }

  onAddPlayer() {
    this.showModal = true
  }

  onCloseModal() {
    this.showModal = false
    this.restService.getPlayerList().subscribe()
  }

}
