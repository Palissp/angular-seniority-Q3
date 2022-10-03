import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private Url = 'https://api-exercise-q3.herokuapp.com';
  
  
  
 

 

  constructor(private http: HttpClient) { }


  
  getPositions(){
    return this.http.get(`${this.Url}/position`);
  }

 
  
}
