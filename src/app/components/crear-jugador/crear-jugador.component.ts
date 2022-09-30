import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquipoServiceService } from '../../shared/servicios/equipo-service.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.scss']
})
export class CrearJugadorComponent implements OnInit {

  constructor(private _equipoService:EquipoServiceService) { }

  ngOnInit(): void {
  }


  crearJugador(registerForm: NgForm){
    this._equipoService.setJugador(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
