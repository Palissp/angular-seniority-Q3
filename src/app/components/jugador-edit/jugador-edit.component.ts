import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Posiciones } from 'src/app/_modelo/posiciones';
import { Player } from './../../_modelo/player';
import { PosicionService } from './../../_services/posicion.service';
import { JugadoresService } from 'src/app/_services/jugadores.service';

@Component({
  selector: 'app-jugador-edit',
  templateUrl: './jugador-edit.component.html',
  styleUrls: ['./jugador-edit.component.scss']
})
export class JugadorEditComponent implements OnInit {

  posiciones: Posiciones[]=[];
  jugador!: Player;
  form!: FormGroup;
  imagenUrl!:string;
  @Input() isDialog!:boolean ;
  @Input() idJugador!: string;
  constructor(
    private posicionService:PosicionService,
    private jugadorService: JugadoresService
  ) { }

  ngOnInit(): void {
    console.log(this.idJugador)

    this.form = new FormGroup({
      nombre: new FormControl(""),
      apellido: new FormControl(""),
      imagen: new FormControl(""),
      posicion: new FormControl("") 

    });

    this.posicionService.listar().subscribe(data => {
     this.posiciones = data
    })
   
  }
  vistaPreviaImg(event:string){
    this.imagenUrl = this.form.value.imagen;
  }
  
  aceptar(){
    console.log(this.form.value.posicion)
    this.jugador = new Player();
    this.jugador.firstName = this.form.value.nombre;
    this.jugador.lastName = this.form.value.apellido;
    this.jugador.image = this.form.value.imagen;
    this.jugador.idPosition = this.form.value.posicion;
    this.jugador.idAuthor = 6
    this.jugador.skills = 10
    this.jugador.defense = 10;
    this.jugador.attack = 10;

    this.jugadorService.registrar(this.jugador).subscribe(data =>{
      console.log(data)
    });
    this.jugadorService.listar().subscribe(data=>{
      this.jugadorService.setJugadorCambio(data);

    })
    
    let modal_t  = document.getElementById('modal_1')
    modal_t?.classList.remove('sshow')
    modal_t?.classList.add('hhidden');  
  }
}
