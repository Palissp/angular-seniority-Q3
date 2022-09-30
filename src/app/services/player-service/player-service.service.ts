import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Player } from 'src/app/interfaces/player-interface';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  private apiUrl = environment.apiUrl + 'player';

  // private httpOptions = {
  //   header: new Headers({
  //     'Content-Type': 'application/json',
  //     'author':'27'
  //   })
  // }

  constructor(private http: HttpClient,
    ) { }
  getPlayer(): Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl)
  }

  
  postPlayer(body: Player): Observable<Player>{
    return this.http.post<Player>(this.apiUrl, body)
  }
  getPlayerById(id: any): Observable<Player> {
      return this.http.get<Player>(`${this.apiUrl}/${id}`)
  }
  
  editPlayerById(id: any, body:Player): Observable<Player>{
    return this.http.put<Player>(`${this.apiUrl}/${id}`, body)
  }
  deletePlayerById(id: any): Observable<Player>{
    return this.http.delete<Player>(`${this.apiUrl}/${id}`)
  }
  searchPlayerByAuthor(body: string): Observable<Player[]>{
    return this.http.post<Player[]>(`${this.apiUrl}/search`, body)
  }




 
}
