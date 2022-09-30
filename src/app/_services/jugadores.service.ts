import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../_modelo/player';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  url: string = `https://api-exercise-q3.herokuapp.com/player`;
 
  headers= new HttpHeaders()
  .set('author', '6');
  private jugadorCambio = new Subject<any>();
 
  constructor(private http: HttpClient) { 

    }



  getJugadorCambio(){
    return this.jugadorCambio.asObservable();
  }
  //set subject
  setJugadorCambio(jugador: any[]){
    this.jugadorCambio.next(jugador)
  }

  listar() {
    
    return this.http.get<any[]>(`${this.url}`, {'headers':this.headers});
  }

  listarPorId(id: number) {
    return this.http.get<any>(`${this.url}/${id}`, {'headers':this.headers});
  }

  registrar(player: Player) {
    return this.http.post(`${this.url}`, player,  {'headers':this.headers});
  }

  modificar(id:string, player: Player) {
    return this.http.patch(`${this.url}/${id}`, player);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
