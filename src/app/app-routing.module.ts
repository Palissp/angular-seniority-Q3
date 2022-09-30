import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jugadores',
    loadChildren: () => import('./modules/players/players.module').then(module => module.PlayersModule),
  },
  {
    path: '',
    redirectTo: 'jugadores',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'jugadores',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
