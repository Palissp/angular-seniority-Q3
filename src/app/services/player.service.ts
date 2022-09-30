import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Player} from "../interfaces/player.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private readonly AUTHOR_ID = "24";
    private readonly ENDPOINT = 'https://api-exercise-q3.herokuapp.com';

    headers: HttpHeaders = new HttpHeaders().set('author', this.AUTHOR_ID)

    constructor(private http: HttpClient) {
    }

    /**
     * Get the football player list
     * @return Player[]
     */
    getPlayerList(): Observable<Player[]> {
        return this.http.get<Player[]>(`${this.ENDPOINT}/player`, {
            headers: this.headers
        })
    }

    /**
     * Delete one football player by ID
     * @param id player ID
     * @return Player[]
     */
    deletePlayerById(id: number): Observable<any> {
        return this.http.delete<any>(`${this.ENDPOINT}/player/${id}`, {
            headers: this.headers
        })
    }
}
