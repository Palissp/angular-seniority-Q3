import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {StateService} from "../state-service/state.service";
import {IPlayer} from "../../interfaces/player.interface";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private readonly ID_AUTOR = '1';
    private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

    constructor(private httpService: HttpClient,
                private readonly state: StateService
                ) {

    }

    getPlayers(): Observable<any> | undefined {
        const headers = new HttpHeaders({'author':this.ID_AUTOR});
        return this.httpService.get<IPlayer[]>(`${this.ENPOINT}/player`, {headers: headers}).pipe(
            tap(
                resp => {
                    console.log(resp)
                    this.state.setPlayerList(resp)
                }
            )
        )
    }


}
