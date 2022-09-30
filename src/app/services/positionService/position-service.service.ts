import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { BodyPosition } from 'src/app/interfaces/player-interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {
  private apiUrl = environment.apiUrl + 'position'


  constructor(private http: HttpClient) { }

  getPosition(): Observable<BodyPosition[]>{
    return this.http.get<BodyPosition[]>(this.apiUrl)

  }
 
  getPositionById(id: any): Observable<BodyPosition>{
    return this.http.get<BodyPosition>(`${this.apiUrl}/${id}`)
  }
  

  
}
