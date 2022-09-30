import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private Url = 'https://api-exercise-q3.herokuapp.com/player';
  private IdAutor = 8;

  constructor(private http: HttpClient) { }

  getPLayers():Observable<Player []>{
      return this.http.get<Player []>(`${this.Url}?idAuthor=${this.IdAutor}`);
  }

  postPlayer(player:Player):Observable<Player> {
    return this.http.post<Player>(`${this.Url}?idAuthor=${this.IdAutor}`,player);
  }

  updatePlayer(id:(string | undefined), player:Player):Observable<any>{
    return this.http.post(`${this.Url}/${id}?idAuthor=${this.IdAutor}`, player);    
  }

  deletePlayer(id:(string | undefined) ):Observable<any>{
    return this.http.delete(`${this.Url}/${id}?idAuthor=${this.IdAutor}`);    
  }
  
}
