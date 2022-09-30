import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
const headers = new HttpHeaders().set('author', '4')

@Injectable({
  providedIn: 'root'
})

export class JugadoresService {
  
  baseURL: string = "https://api-exercise-q3.herokuapp.com/";
  constructor(
    private http: HttpClient,
  ) { }


  getPlayer(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'player',{ 'headers': headers })
      .pipe(
        map((data) => {
          
          return data;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }
}
