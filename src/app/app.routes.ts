
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './components/jugador/jugador.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';

const APP_ROUTES: Routes = [
  { path: 'jugadores', component: EquipoComponent },
  { path: 'jugador/:id', component: JugadorComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'crearJugador/', component: CrearJugadorComponent },  
  { path: '**', pathMatch: 'full', redirectTo: 'jugadores' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
