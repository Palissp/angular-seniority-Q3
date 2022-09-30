import { Component, OnInit } from '@angular/core';
import { Jugador } from './models/jugador';
import { JugadoresService } from './services/jugadores.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormularioJugadorComponent } from './components/formulario-jugador/formulario-jugador.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'jest-angular';
  listaJugadores: Jugador[] = [];
  overlayRef: OverlayRef | undefined;

  constructor(
    private jugadoresService: JugadoresService,
    private overlay: Overlay
  ) {

  }

  ngOnInit(): void {

    this.jugadoresService.getPlayer()
      .subscribe(res => {
        this.listaJugadores = res;
       // console.log(JSON.parse(res));

      });

      const positionStrategy = this.overlay.position()

    .global()

    .centerHorizontally()

    .centerVertically();



  this.overlayRef = this.overlay.create({

   

    backdropClass: 'backdrop',

    panelClass: 'panel',

    hasBackdrop: true,

    positionStrategy

  });

  }



  closeModal(): void {

    this.overlayRef?.detach();

  }



  add(): void {

    this.closeModal();

    const testPortal = new ComponentPortal(FormularioJugadorComponent);

    this.overlayRef?.attach(testPortal)

  }


}
