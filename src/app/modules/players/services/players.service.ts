import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment.prod";
import { Observable } from "rxjs";
import { Player } from "../models/player";

@Injectable()
export class PlayersService {
	static API_URL = environment.apiUrl;
	static AUTHOR_ID = environment.authorId;
	constructor(private http: HttpClient) {}

	getPlayers(): Observable<Player[]> {
		return this.http.get<Player[]>(
			`${PlayersService.API_URL}/${PlayersService.AUTHOR_ID}`
		);
	}

	searchPlayer(term: string): Observable<Player[]> {
		return this.http.get<Player[]>(
			`${PlayersService.API_URL}/${PlayersService.AUTHOR_ID}/${term}`
		);
	}

	savePlayer(data: Player): Observable<any> {
		return this.http.post<any>(
			`${PlayersService.API_URL}/${PlayersService.AUTHOR_ID}`,
			data
		);
	}

	deletePlayer(id: number): Observable<any> {
		return this.http.delete<any>(`${PlayersService.API_URL}/${id}`);
	}

	editPlayer(data: Player): Observable<any> {
		return this.http.patch<any>(
			`${PlayersService.API_URL}/${PlayersService.AUTHOR_ID}`,
			data
		);
	}
}
