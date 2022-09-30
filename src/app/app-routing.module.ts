import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  {
    path: 'add-player',
    component: ModalComponent
  },
  {
    path: 'add-player/:id',
    component: ModalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
