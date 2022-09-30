import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorEditComponent } from './components/jugador-edit/jugador-edit.component';

const routes: Routes = [
  { path: 'jugador-edit', component: JugadorEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
