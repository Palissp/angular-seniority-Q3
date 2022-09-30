import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../../../../shared/models/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  @Input() player: Player;
  @Output() sendCloseModal: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

  cancel() {
    this.sendCloseModal.emit(false);
  }

}
