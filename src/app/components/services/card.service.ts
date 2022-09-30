import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import {Player} from '../../interface/player.interface';
import {PositionPlayer} from "../../interface/position.interface";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly URL = environment.api
  players : Player[] = [];
  position : PositionPlayer [] = [];

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(`${this.URL}/player`, {

    });
  }

  getPlayerById(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.URL}/player/${id}`);
  }

  getPlayerPosition(): Observable<PositionPlayer> {
    return this.http.get<PositionPlayer>(`${this.URL}/position`);
  }

}
