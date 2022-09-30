import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosPlayerComponent } from './components/datos-player/datos-player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('agregarModificarRegistro', [state('mostrar', style({
      'display': 'block'
    })),
    state('ocultar', style({
      'display': 'none'
    }))
    ])
  ]
})
export class AppComponent implements OnInit {
  currentStateRegistro: string = 'ocultar';
  @ViewChild(DatosPlayerComponent) datosPlayer!: DatosPlayerComponent;

  title = 'jest-angular';
  constructor() {

  }
  ngOnInit(): void {

  }

  agregarPlayer() {
    //this.datosPlayer.(title);
    this.mostrarDetalle();
  }
  
  mostrarDetalle() {
    this.ocultarTodo();
    this.currentStateRegistro = 'mostrar';
  }

  ocultarTodo() {
    this.currentStateRegistro = 'ocultar';
  }

 }
