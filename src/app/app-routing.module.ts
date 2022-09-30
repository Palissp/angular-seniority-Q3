import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './home/team/components/add-player/add-player.component';
import { ListPlayerComponent } from './home/team/components/list-player/list-player.component';

const routes: Routes = [
  { path: '', component: ListPlayerComponent },
  { path: 'add', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
