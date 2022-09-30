import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PlayerDToInterface} from "../interfaces/playerDTo.interface";
@Injectable({
  providedIn: 'root'
})
export class StateService {
  public playerList$ = new BehaviorSubject<PlayerDToInterface[]>([]);

  constructor() { }

  get playerList() {
    return this.playerList$.getValue();
  }

  setPlayerList(value: PlayerDToInterface[]) {
    this.playerList$.next(value);
  }
}
