import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/Player';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  public playerSelect$ = new BehaviorSubject<Player | undefined>(undefined);
  public playerList$ = new BehaviorSubject<Player[] | undefined>(undefined);

  constructor() { }

  get playerSelect() {
    return this.playerSelect$.getValue();
  }

  setPlayerSelect(value: Player) {
    this.playerSelect$.next(value);
  }

  get playerList() {
    return this.playerList$.getValue();
  }

  setPlayerList(value: Player[]) {
    this.playerList$.next(value);
  }


}
