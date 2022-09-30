import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {PlayerDToInterface} from "../interfaces/playerDTo.interface";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';
  private httpOptions = {
    headers: new HttpHeaders(     {
          'Content-Type': 'application/json',
          'author': '21'
    }),
  };

  constructor(
      private http: HttpClient,
      private readonly state: StateService
  ) { }

  public postNewPlayer(todo: PlayerDToInterface): Observable<PlayerDToInterface> {
      console.log(todo);
    const body = JSON.stringify(todo);


    return this.http.post<PlayerDToInterface>(`${this.ENPOINT}/player`, body, this.httpOptions);
  }
  public getPlayer(): Observable<PlayerDToInterface[]> {
    return this.http.get<PlayerDToInterface[]>(`${this.ENPOINT}/player`, this.httpOptions).pipe(
        tap(
            resp => {
              this.state.setPlayerList(resp);
            }
        )
    );
  }
  //
  // public updatePlayer(todo: Player): Observable<PlayerDToInterface> {
  //   const body = JSON.stringify(todo);
  //   return this.http.put<PlayerDToInterface>(`${this.ENPOINT}/${todo.id}`, body, this.httpOptions);
  // }
  //
  // public deletePlayer(todo: Player): Observable<PlayerDToInterface> {
  //   return this.http.delete<PlayerDToInterface>(`${this.ENPOINT}/${todo.id}`, this.httpOptions);
  // }

}
