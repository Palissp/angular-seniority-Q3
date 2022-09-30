import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { RestService } from '../../../core/services/rest.service';
import { StateService } from '../../../core/services/state.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player!: Player
  showModal = false;

  constructor(private restService: RestService,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  onEdit(player: Player) {
    this.stateService.setPlayerSelect(player)
    this.showModal = true
  }

  onCloseModal() {
    this.showModal = false
    this.restService.getPlayerList().subscribe()
  }

  onDelete(player: Player) {
    if (player.id) {
      this.restService.deletePlayer(player.id).pipe(
        tap(
          resp => {
            if (resp.affected > 0) {
              this.restService.getPlayerList().subscribe();
              alert("Estimado cliente la tarea se elimino exitosamente")
            } else {
              alert("Estimado cliente se presento un problema al eliminar la tarea")
            }
          }
        )
      ).subscribe()
    }
  }

}
