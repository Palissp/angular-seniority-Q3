import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Player } from '@models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url = 'https://api-exercise-q3.herokuapp.com/player';
  private idAuthor = 18;
  constructor(
    private _http: HttpClient
  ) { }

  getPlayers(): Observable<Player[]> {
    let params = new HttpParams();
    params = params.append('author', 18);

    return this._http.get(this.url,).pipe(map(res => res as Player[]))
  }

  savePlayer(player: Player): Observable<Player> {
    player.idAuthor = this.idAuthor;
    let params = new HttpParams();
    params = params.append('author', 18);

    return this._http.post(this.url, player).pipe(map(res => res as Player))
  }

  editPlayer(player: Player): Observable<Player> {
    const url = `${this.url}/${player.id}`
    return this._http.put(url, player).pipe(map(res => res as Player))
  }

  deletePlayer(player: Player): Observable<Player> {
    const url = `${this.url}/${player.id}`
    return this._http.delete(url).pipe(map(res => res as Player))
  }
}
