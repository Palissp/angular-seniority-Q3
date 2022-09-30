import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() player!: Player;
  @Output() clickEdit = new EventEmitter<Player>();
  @Output() clickDelete = new EventEmitter<Player>();

  constructor() {}

  ngOnInit(): void {}
  onClickButtonEdit(player: Player) {
    this.clickEdit.emit(player);
  }
  onClickButtonDelete(player: Player) {
    this.clickDelete.emit(player);
  }
}
