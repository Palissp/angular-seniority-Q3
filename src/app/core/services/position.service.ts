import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from '@models/position';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private url = 'https://api-exercise-q3.herokuapp.com/position'

  constructor(
    private _http: HttpClient,
  ) { }

  getPosition(): Observable<Position[]> {

    return this._http.get(this.url,).pipe(map(res => res as Position[]))
  }
}
