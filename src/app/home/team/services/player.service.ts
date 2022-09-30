import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Player } from '../models/Player';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  readonly ID_AUTOR = 2;
  readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

  constructor(
    private http: HttpClient,
    private stateService: StateService
  ) { }

  getAutorId() {
    return this.ID_AUTOR;
  }

  getPlayerList(): Observable<Player[]> | undefined {
    const headers = new HttpHeaders()
      .set('author', `${this.ID_AUTOR}`)
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<Player[]>(`${this.ENPOINT}/player`, { 'headers': headers }).pipe(
      tap(
        resp => {
          this.stateService.setPlayerList(resp);
        }
      ),
      catchError(this.handleError)
    );
  }


  updatePlayer(player: Player): Observable<Player> {
    return player.id ?
      this.http.patch<Player>(`${this.ENPOINT}/player/${player.id}`, player).pipe(catchError(this.handleError)) :
      this.http.post<Player>(`${this.ENPOINT}/player`, player).pipe(catchError(this.handleError))
  }

  deletePlayer(id: number): Observable<Player> {
    return this.http.delete<Player>(`${this.ENPOINT}/player/${id}`).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error: ', error.error);
    } else {
      console.error(`Code: ${error.status}, Body: `, error.error);
    }
    return throwError(() => new Error('Se ha producido un error. Intentar más tarde'));
  }


}
