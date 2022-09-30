import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';
const api_url = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  idAuthor = 1; //7
  constructor(private readonly _http: HttpClient) {}

  crearheaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const author = this.idAuthor;
    headers = headers.append('author', author.toString());
    return headers;
  }

  getAll(): Observable<Player[]> {
    const headers: HttpHeaders = this.crearheaders();
    return this._http.get<Player[]>(`${api_url}/player`, {
      headers,
    });
  }
}
