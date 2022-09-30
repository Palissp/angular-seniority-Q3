import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador-tarjeta',
  templateUrl: './jugador-tarjeta.component.html',
  styleUrls: ['./jugador-tarjeta.component.scss']
})
export class JugadorTarjetaComponent implements OnInit {

  @Input() jugador: any = {};
  @Input() index: number;
  @Output() jugadorSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.jugadorSeleccionado = new EventEmitter();
    this.index=0;
  }

  ngOnInit(): void {
  }

  verJugador() {
    this.router.navigate( ['/jugador', (this.index)] );
  }

  editarJugador(){}


  eliminarJugador(){}


}
