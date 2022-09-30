import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '@models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player = new Player()
  @Output() delete = new EventEmitter<Player>();
  @Output() edit = new EventEmitter<Player>();
  constructor() { }

  ngOnInit(): void {
  }

  editPlayer(){
    this.edit.emit(this.player);
  }

  deletePlayer(){
    this.delete.emit(this.player);
  }

}
