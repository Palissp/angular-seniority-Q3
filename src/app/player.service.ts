import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import * as myGlobals from './global'; //<==== this one
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private ApiUrl = myGlobals.urlApi;
  private IdAuthor = myGlobals.idAuthor;
  private headers= new HttpHeaders().set('author', this.IdAuthor.toString());

  constructor(private httpCliente : HttpClient) { }

  //metodo que lista todos los jugadores
  obtenerListaPlayer():Observable<Player[]>{
    return this.httpCliente.get<Player[]>(`${this.ApiUrl}/player`,{headers: this.headers});
  }
}
