import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private Url = 'https://api-exercise-q3.herokuapp.com/player';
 

  private readonly ID_AUTOR = '8';
  private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

  constructor(private http: HttpClient) { }
  playerToEdit = new BehaviorSubject<Player | null>(null);


  
  getPLayers(): Observable<Player[]>{    
    const url = `${this.ENPOINT}/player`;
    return this.http.get<Player[]>(url, {headers :{
      'author': this.ID_AUTOR
    }});
  }


 
  deletePlayer(playerId: number):Observable<any>{
    return this.http.delete(`${this.Url}/${playerId}`);    
  }
  createPlayer(player: Player){
    return this.http.post(`${this.Url}/`, {...player, idAuthor: this.ID_AUTOR});
  }

  editPlayer(player: Player){
    return this.http.patch(`${this.Url}/${player.id}`, player);
  }

 
  
}
