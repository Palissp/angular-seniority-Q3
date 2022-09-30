import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { EditIconComponent } from './components/atoms/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './components/atoms/delete-icon/delete-icon.component';
import { FilterListPipe } from './pipe/filter-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    PlayerCardComponent,
    HeaderComponent,
    EditIconComponent,
    DeleteIconComponent,
    FilterListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerCardComponent,
    EditIconComponent,
    DeleteIconComponent,
    HeaderComponent,
    FilterListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
