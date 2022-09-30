import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Player } from 'src/app/shared/models/player';
import { Position } from 'src/app/shared/models/position';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly ID_AUTOR = 10;
  private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

  private headers: HttpHeaders = new HttpHeaders({ author: this.ID_AUTOR.toString() })

  constructor(
    private http: HttpClient,
    private readonly state: StateService
  ) { }

  getAutoId() {
    return this.ID_AUTOR;
  }

  getPlayerList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.ENPOINT}/player`, { headers: this.headers }).pipe(
      tap(
        resp => {
          this.state.setPlayerList(resp);
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

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(`${this.ENPOINT}/player/${id}`).pipe(catchError(this.handleError));
  }

  searchPlayer(text: string): Observable<Player> {
    return this.http.delete<Player>(`${this.ENPOINT}/player/${text}`, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.ENPOINT}/position`).pipe(
      tap(
        resp => {
          this.state.setPositionList(resp);
        }
      ),
      catchError(this.handleError)
    );
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
