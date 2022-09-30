import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

const urlService='https://api-exercise-q3.herokuapp.com/player/';
const idAutor = '22';//22


@Injectable({
  providedIn: 'root'
})
export class EquipoServiceService {

  constructor(private http: HttpClient) { 
  }

  getJugadores(){
    console.log(urlService);
    return this.http.get(urlService,{headers: new HttpHeaders({'author': idAutor || ''})});
  }

  getJugador(id:number){
    console.log(urlService);
    return this.http.get(urlService+id,{headers: new HttpHeaders({'author': idAutor || ''})});
  }

  setJugador(jugadorData: any){
    console.log(jugadorData);
    return this.http.post(urlService,{headers: new HttpHeaders({'author': idAutor || ''})}, jugadorData);    
  }


}


export interface Jugador{
  firstName: string;
  lastName: string;
  image: string;
  attack: number;
  defense: number;
  skills: number;
  idAuthor: number;
  idPosition: number;
}
;