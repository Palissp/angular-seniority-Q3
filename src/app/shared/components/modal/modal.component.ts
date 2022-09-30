import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { RestService } from '../../../core/services/rest.service';
import { StateService } from '../../../core/services/state.service';
import { Player } from '../../models/player';
import { Position } from '../../models/position';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public frm!: FormGroup;
  player!: Player;
  listPosition: Position[] = []

  @Output() emitClose: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private readonly fb: FormBuilder,
    private restService: RestService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.player = this.stateService.playerSelect;
    this.frm = this.fb.group({
      firstName: [this.player?.firstName ? this.player?.firstName : null, [Validators.maxLength(50), Validators.required]],
      lastName: [this.player?.lastName ? this.player?.lastName : null, [Validators.maxLength(50), Validators.required]],
      image: [this.player?.image ? this.player?.image : null, [Validators.maxLength(500), Validators.required]],
      attack: [this.player?.attack ? this.player?.attack : 0, [Validators.required]],
      defense: [this.player?.defense ? this.player?.defense : 0, [Validators.required]],
      skills: [this.player?.skills ? this.player?.skills : 0, [Validators.required]],
      idPosition: [this.player?.idPosition ? this.player?.idPosition : 0, [Validators.required]],
    });
    this.listPosition = this.stateService.positionList
  }

  onClickAdd() {
    let player: Player;
    if (this.player?.id) {
      player = {
        id: this.player.id,
        ...this.frm.value,
        idAuthor: this.restService.getAutoId()
      }
    } else {
      player = {
        ...this.frm.value,
        idAuthor: this.restService.getAutoId()
      }
    }
    this.restService.updatePlayer(player).pipe(
      tap(resp => {
        if (resp) {
          this.onClose()
        } else {
          alert("Estimado cliente se produjo un error al agregar la tarea")
        }
      })
    ).subscribe();
  }

  onClose() {
    this.emitClose.emit()
  }
}
