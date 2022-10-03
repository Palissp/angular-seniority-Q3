import { Component, OnInit } from '@angular/core';
import { Player } from './config/player.interface';
import { PlayersService } from './services/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jest-angular';
  players: Player[] = [];
  playersToShow: Player[] = this.players;
  searchTerm = '';

  constructor(private playersService: PlayersService){}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
    this.playersService.getPlayersByAuthor('29').subscribe(response => {
      this.players = response as Player[];
      this.playersToShow = this.players;
    });
  }

  onSearch() {
    const lowercaseTerm = this.searchTerm.toLowerCase();
    this.playersToShow = this.players.filter(player =>
      player.firstName.toLowerCase().includes(lowercaseTerm) ||
      player.lastName.toLowerCase().includes(lowercaseTerm));
  }

  onAdd(){
    this.playersService.playerToEdit.next(null);
    document.getElementById('playerModal')!.style.display = 'block';
  }
}
