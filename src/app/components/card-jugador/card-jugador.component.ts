import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-card-jugador',
  templateUrl: './card-jugador.component.html',
  styleUrls: ['./card-jugador.component.scss']
})
export class CardJugadorComponent implements OnInit {

  @Input()
  listaJugadores : Jugador[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
