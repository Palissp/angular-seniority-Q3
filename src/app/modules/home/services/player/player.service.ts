import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ENDPOINTS } from '../../../../cores/config/endpoints';
import { getApiUrl } from '../../../../cores/services/api-url';
import { PlayerI, SearchI } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  idAuthor: number = environment.authorId

  constructor(private http: HttpClient) { }

  getPlayers() {
    const url = getApiUrl(ENDPOINTS.PLAYER, '');
    const headers = new HttpHeaders().set("author", "19");
    return this.http.get<PlayerI[]>(url, { headers });
  }

  getPlayerById(id: number) {
    const url = getApiUrl(ENDPOINTS.PLAYER, '') + `/${id}`;
    return this.http.get(url);
  }

  postPlayer(player: PlayerI) {
    const url = getApiUrl(ENDPOINTS.PLAYER, '');
    return this.http.post<PlayerI>(url, player);
  }

  updatePlayerById(id: number, player: PlayerI) {
    const url = getApiUrl(ENDPOINTS.PLAYER, '') + `/${id}`;
    return this.http.put(url, player);
  }

  deletePlayerById(id?: number) {
    const url = getApiUrl(ENDPOINTS.PLAYER, '') + `/${id}`;
    return this.http.delete(url);
  }

  postSearchPlayer(search: SearchI) {
    const url = getApiUrl(ENDPOINTS.PLAYER, '');
    const headers = new HttpHeaders().set("author", "19");
    return this.http.post(url, search, {headers});
  }



}
