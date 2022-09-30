import { Component, OnInit } from '@angular/core';
import { EquipoServiceService } from '../../shared/servicios/equipo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  public jugadores: Array<any>=[];

  constructor(private _equipoService:EquipoServiceService,private router:Router) {
    this._equipoService.getJugadores().subscribe((res: any)=> {
      this.jugadores=res;
      console.log(this.jugadores);
    });
   }

  ngOnInit(): void {
  }
  verJugador( idx:number ){
    this.router.navigate( ['/jugador',idx] );
  }

}
