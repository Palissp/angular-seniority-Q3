import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) { 
    this.url = environment.api;
  }

  getAllPositions(): Observable<any> {
    return this._httpClient.get(`${this.url}/position`);
  }

  getPositionById(id: string): Observable<any> {
    return this._httpClient.get(`${this.url}/position/${id}`);
  }
}
