import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { PageComponent } from './home/page/page.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageComponent
  },
  {
    path: 'add-player',
    component: ModalComponent
  },
  {
    path: 'add-player/:id',
    component: ModalComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
