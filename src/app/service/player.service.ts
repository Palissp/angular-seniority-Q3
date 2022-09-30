import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService } from "./state.service";
import { Player } from "../interfaces/player";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PlayerService {
  
    private readonly ID_AUTOR = '15';
    private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';
  
    constructor(
      private http: HttpClient,
      private readonly state: StateService
      ) { }
  
    getPlayers(){
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'accept': '*/*','author':this.ID_AUTOR});

      return this.http.get<Player>(`${this.ENPOINT}/player`, { headers }).pipe(
        tap(
          (resp: any) => {
            this.state.setPlayerList(resp);
            this.state.setPlayerListAPI(resp);
            }
          )
      ); 
    }

    deletePlayer(idPlayer: any): Observable<any> | undefined {
      return this.http.delete<any>(`${this.ENPOINT}/player/${idPlayer}`);
    }

    savePlayer(player: Player): Observable<any> | undefined {
      return this.http.post<Player>(`${this.ENPOINT}/?id_author=${this.ID_AUTOR}`, player);
    }
  
    updatePlayer(player: Player): Observable<any> | undefined {
      return this.http.put<any>(`${this.ENPOINT}/${player.id}`, player);
    } 
  
  }