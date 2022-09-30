import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {StateService} from "../state-service/state.service";
import {IPlayer} from "../../interfaces/player.interface";
import {IPosition} from "../../interfaces/position.interface";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private readonly ID_AUTOR = '106604416';
    private readonly ENPOINT = 'https://api-exercise-q3.herokuapp.com';

    constructor(private httpService: HttpClient,
                private readonly state: StateService
    ) {

    }

    getPlayers(): Observable<IPlayer[]> | undefined {
        const headers = new HttpHeaders({'author': this.ID_AUTOR});
        return this.httpService.get<IPlayer[]>(`${this.ENPOINT}/player`, {headers: headers}).pipe(
            tap(
                resp => {
                    console.log(resp)
                    this.state.setPlayerList(resp)
                }
            )
        )
    }

    postPlayer(player: IPlayer): Observable<any> | undefined {
        console.log(player)
        const headers = new HttpHeaders({'author': this.ID_AUTOR});
        return this.httpService.post<any>(`${this.ENPOINT}/player`, player, {headers: headers}).pipe(
            tap(
                resp => {
                    console.log(resp)
                }
            )
        )
    }

    getPositions(): Observable<IPosition[]> | undefined {
        return this.httpService.get<IPosition[]>(`${this.ENPOINT}/position`).pipe(
            tap(
                resp => {
                    console.log(resp)
                    this.state.setPositionList(resp)
                }
            )
        )
    }


}
