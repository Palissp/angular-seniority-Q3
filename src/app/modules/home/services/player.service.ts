import { PlayerModel } from 'src/app/core/models/player.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly ID_AUTOR = "6";
  private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

  constructor(
    private http: HttpClient
  ) {}

  getPlayerList(): Observable<any> | undefined {
    return this.http.get<any>(`${this.ENPOINT}/player`, {
      headers: {'author': this.ID_AUTOR}
   }).pipe(
      tap(
        resp => {
          return resp;
        }
      )
    );
  }


  addPlayer(player: any): Observable<any> {
    return this.http.post<any>(`${this.ENPOINT}/player`, player).pipe(
      tap(
        resp => {
          console.log("usuario creado")
        }
      )
    );
  }

  editPlayer(player: PlayerModel): Observable<any> | undefined {
    return this.http.put<any>(`${this.ENPOINT}/${player.id}`, player).pipe(
      tap(
        resp => {
          console.log("usuario editado")
        }
      )
    );
  }

  deletePlayer(player: PlayerModel): Observable<any> {
    return this.http.delete<any>(`${this.ENPOINT}/player/${player.id}`).pipe(
      tap(
        resp => {
          console.log("usuario eliminado");
        }
      )
    );
  }
}
