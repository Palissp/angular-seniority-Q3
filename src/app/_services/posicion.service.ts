import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  url: string = `https://api-exercise-q3.herokuapp.com/position`;
 
 
 
  constructor(private http: HttpClient) { 

    }

  listar() {
    
    return this.http.get<any[]>(`${this.url}`);
  }

  listarPorId(id: number) {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  
}
