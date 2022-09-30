import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPlayer} from "../../interfaces/player.interface";
import {IPosition} from "../../interfaces/position.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public playerSelect$ = new BehaviorSubject<IPlayer | undefined>(undefined);
  public playerList$ = new BehaviorSubject<IPlayer[] | undefined>(undefined);
  public positionsList$ = new BehaviorSubject<IPosition[] | undefined>(undefined);

  constructor() { }

  get playerSelect() {
    return this.playerSelect$.getValue();
  }

  setPlayerSelect(value: IPlayer) {
    this.playerSelect$.next(value);
  }

  get playerList() {
    return this.playerList$.getValue();
  }

  setPlayerList(value: IPlayer[]) {
    this.playerList$.next(value);
  }

  setPositionList(value: IPosition[]) {
    this.positionsList$.next(value)
  }
}
