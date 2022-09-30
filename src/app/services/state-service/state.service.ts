import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPlayer} from "../../interfaces/player.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public playerSelect$ = new BehaviorSubject<IPlayer | undefined>(undefined);
  public playerList$ = new BehaviorSubject<IPlayer[] | undefined>(undefined);

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
    this.playerList$.next([...value, ...value]);
  }
}
