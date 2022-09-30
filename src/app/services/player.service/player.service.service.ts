import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Player, Position} from "../../core/models/player.interface";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly URL = environment.api;
  private readonly AUTHOR = environment.author;

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(`${this.URL}/player`, {
      headers: { author: this.AUTHOR }
    });
  }

  getPositions() {
    return this.http.get<Position[]>(`${this.URL}/position`, {
      headers: { author: this.AUTHOR }
    });
  }

  deletePlayer(id: number) {
    return this.http.delete(`${this.URL}/player/${id}`, {
      headers: { author: this.AUTHOR }
    });
  }

  postPlayer(player: Player) {
    return this.http.post(`${this.URL}/player`, player);
  }
}
