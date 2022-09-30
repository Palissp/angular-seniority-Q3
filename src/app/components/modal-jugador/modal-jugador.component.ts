import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-modal-jugador',
  templateUrl: './modal-jugador.component.html',
  styleUrls: ['./modal-jugador.component.scss']
})
export class ModalJugadorComponent implements OnInit {

  constructor(
    private _jugadorService : JugadorService
  ) { }

  ngOnInit(): void {
  }
  cerrarModal(){
    this._jugadorService.$modal.emit(false);
  }

}
