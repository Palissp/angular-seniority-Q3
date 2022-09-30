import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Players } from '../model/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private urlApi: string

  constructor(private http: HttpClient) {
    this.urlApi = `${environment.urlPlayer}`;
  }

  public getPlayer(): Observable<Players[]> {
    const opciones = {
      headers: new HttpHeaders({
        'accept':'application/json',
        'author': '26'
      })
      }
    return this.http.get<Players[]>(`${this.urlApi}`, opciones);
  }
}
