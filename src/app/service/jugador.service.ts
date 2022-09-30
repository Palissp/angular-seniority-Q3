import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IJugador } from '../intefaces/jugador.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
 // https://api-exercise-q3.herokuapp.com/player todos los jugadores get ok
 // https://api-exercise-q3.herokuapp.com/player inserta nuevo jugador post ok
 // https://api-exercise-q3.herokuapp.com/player/12 get por id de jugador
 // https://api-exercise-q3.herokuapp.com/player/9 patch uptade por id jugador
 // https://api-exercise-q3.herokuapp.com/player/9 delete por id jugador
 // https://api-exercise-q3.herokuapp.com/player/search nusquda por idAutor y last/name

 private readonly ID_AUTOR = '13';
 private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';


  constructor( private _http: HttpClient) { }

  // cosultar todos los jugadores
  obtenerTodosJugadores(): Observable<IJugador[]>{    
    const url = `${this.ENPOINT}/player`;
    return this._http.get<IJugador[]>(url, {headers :{
      'author': this.ID_AUTOR
    }});
  }

  // inbsertar nuevo jugador 
  insertarJugador(jugador: IJugador): Observable<IJugador>{    
    const url = `${this.ENPOINT}/player`;
    const jugadorCrear : IJugador = {
      firstName : jugador.firstName,
      lastName : jugador.lastName,
      image : jugador.image,
      attack: jugador.attack,
      defense: jugador.defense,
      skills: jugador.skills,
      idAuthor: jugador.idAuthor,
      idPosition: jugador.idPosition
    }  
    return this._http.post<IJugador>(url, jugadorCrear);
  }

  // cosultar todos los jugadores por id
  obtenerXIdJugador(idJugador : string): Observable<IJugador[]>{    
    const url = `${this.ENPOINT}/player/${idJugador}`;
    return this._http.get<IJugador[]>(url);
  }


   // Actualizar jugador
   actualizarJugador(jugador: IJugador): Observable<IJugador>{    
    const url = `${this.ENPOINT}/player/${jugador.id}`;
    const jugadorActualizar : IJugador = {
      firstName : jugador.firstName,
      lastName : jugador.lastName,
      image : jugador.image,
      attack: jugador.attack,
      defense: jugador.defense,
      skills: jugador.skills,
      idAuthor: jugador.idAuthor,
      idPosition: jugador.idPosition
    }  
    return this._http.patch<IJugador>(url, jugadorActualizar);
  }

  // eliminar  jugador por id
  eliminarXIdJugador(idJugador : number): Observable<any>{    
    const url = `${this.ENPOINT}/player/${idJugador}`;
    return this._http.delete<any>(url);
  }

  // cosultar todos los jugadores por id autor y nombre jugador
  obtenerXIdautorNombreJugador(nombreJugador : string): Observable<any>{    
    const url = `${this.ENPOINT}/player/search`;
    return this._http.post<any>(url,{'search': nombreJugador},{headers:{ 
      'author': this.ID_AUTOR
    }});
  }
 // manejo de modal
  $modal = new EventEmitter<any>();
}
