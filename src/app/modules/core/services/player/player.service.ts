import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Player } from '../../../../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) { 
    this.url = environment.api;
  }

  getAllPlayers(author: string): Observable<any> {
    const playerHeaders = {
      headers: new HttpHeaders({author: author})
    }

    return this._httpClient.get(`${this.url}/player`, playerHeaders);
  }

  getPlayerById(id: string): Observable<any> {
    return this._httpClient.get(`${this.url}/player/${id}`);
  }

  createPlayer(data: Player): Observable<any> {
    return this._httpClient.post(`${this.url}/player`, {dataPlayer: data});
  }

  updatePlayer(data: Player): Observable<any> {
    return this._httpClient.patch(`${this.url}/player/${data.id}`, data);
  }

  deletePlayer(playerId: string | number): Observable<any> {
    return this._httpClient.delete(`${this.url}/player/${playerId}`);
  }

  searchPlayer(author: string, search: string): Observable<any> {
    const playerHeaders = {
      headers: new HttpHeaders({author: author})
    }

    return this._httpClient.post(`${this.url}/player/search`, { search: search }, playerHeaders);
  }
}
