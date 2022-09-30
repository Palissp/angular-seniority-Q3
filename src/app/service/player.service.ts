import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of, BehaviorSubject } from 'rxjs';
import { Player } from '../interface/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  serviceURL = "https://api-exercise-q3.herokuapp.com/player";
  selectedPlayer$:BehaviorSubject<Player[]> = new  BehaviorSubject<Player[]>([]);
  idAuthor = 20;
  constructor( private http: HttpClient) { }
 

   /** GET heroes from the server */
   getPlayers(idAuthor:string): Observable<Player[]> {
    return this.http.get<Player[]>(this.serviceURL,{headers:{author:idAuthor}})
      .pipe(
        tap(_ => this.log('fetched players')),
        catchError(this.handleError<Player[]>('getPlayers', []))
      );
  }

  savePlayer(player: Player){
    return this.http.post<Player[]>(this.serviceURL,player)
    .pipe(
      tap(_ => this.log('fetched players')),
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
  setSelectedPlayer(player:Player){
    this.selectedPlayer$.next([player]);
  }
  getSelectedPlayer(){
    return this.selectedPlayer$.asObservable();
  }


}
