import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Player } from '../config/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerToEdit = new BehaviorSubject<Player | null>(null);

  constructor(private http: HttpClient) { }

  getPlayersByAuthor(authorId: string){
    return this.http.get(`${environment.apiUrl}/player`, {headers: {author: authorId}});
  }

  createPlayer(player: Player){
    return this.http.post(`${environment.apiUrl}/player`, {...player, idAuthor: 29});
  }

  editPlayer(player: Player){
    return this.http.patch(`${environment.apiUrl}/player/${player.id}`, player);
  }

  deletePlayer(playerId: number){
    return this.http.delete(`${environment.apiUrl}/player/${playerId}`);
  }
}
