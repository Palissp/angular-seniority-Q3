import { Component, OnInit } from '@angular/core';
import { IJugador } from 'src/app/intefaces/jugador.interface';
import { JugadorService } from 'src/app/service/jugador.service';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
 //styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombreJugador :string='';
  listaJugadores: IJugador[]= [];
  modalSwitch: boolean = false;

  constructor(
    private _jugadorService : JugadorService
  ) { }

  ngOnInit(): void {

    this._jugadorService.$modal.subscribe(r=>{
      this.modalSwitch = r;
    });

    this._jugadorService.obtenerTodosJugadores()
    .subscribe(j=>{
      this.listaJugadores = j;
      console.log(j)
    });

  }

  // metodo para buscar por nombre
  buscarXNombre(){
    this._jugadorService.obtenerXIdautorNombreJugador(this.nombreJugador).
    subscribe(j=>{
     this.listaJugadores = j;
     console.log(j)
    })

  }

 // Método para eliminar por id de jugador
  eliminarXIdJugador(id:number){
    this._jugadorService.eliminarXIdJugador(id).subscribe(j=>{

    })
  }
  abrirModalJugador(){
    this.modalSwitch = true;
  }

}
