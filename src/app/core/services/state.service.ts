import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from 'src/app/shared/models/player';
import { Position } from 'src/app/shared/models/position';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  initPlayer: Player = {
    firstName: "",
    lastName: "",
    image: "",
    attack: 0,
    defense: 0,
    skills: 0,
    idAuthor: 10,
    idPosition: 0
  }

  initPosition: Position = {
    id: 1,
    description: "Delantero"
  }

  public playerSelect$ = new BehaviorSubject<Player>(this.initPlayer);
  public playerList$ = new BehaviorSubject<Player[]>([this.initPlayer]);
  public positionList$ = new BehaviorSubject<Position[]>([this.initPosition]);

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

  get positionList() {
    return this.positionList$.getValue();
  }

  setPositionList(value: Position[]) {
    this.positionList$.next(value);
  }
}
