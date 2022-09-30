import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Player } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  readonly AUTHOR_ID_CBALCAZA: string = "3";
  API_URL = `https://api-exercise-q3.herokuapp.com`;

  constructor(private readonly _httpClient: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this._httpClient.get<Player[]>(`${this.API_URL}/player`, {
      headers: { author: this.AUTHOR_ID_CBALCAZA },
    });
  }

  getPositions(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.API_URL}/position`);
  }

  createPlayer(player: Player): Observable<any> {
    const newPlayer: Player = {
      ...player,
      idAuthor: Number(this.AUTHOR_ID_CBALCAZA),
    };

    return this._httpClient.post<any>(`${this.API_URL}/player`, newPlayer, {
      headers: { author: this.AUTHOR_ID_CBALCAZA },
    });
  }

  updatePlayer(player: Player): Observable<any> {
    return this._httpClient.patch<any>(
      `${this.API_URL}/player/${player.id}`,
      player
    );
  }

  deletePlayer(id: number): Observable<any> {
    return this._httpClient.delete<any>(`${this.API_URL}/player/${id}`);
  }
}
