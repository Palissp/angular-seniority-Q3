import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.scss']
})
export class ListPlayerComponent implements OnInit {
  listPlayers: Player[] | undefined = [];
  searchList: Player[] | undefined = []

  constructor(private playerService: PlayerService, private stateService: StateService,
    private router: Router) { }

  ngOnInit(): void {
    this.getListPlayer();
    this.stateService.playerList$.subscribe(resp => {
      this.listPlayers = resp;
      this.searchList = resp;
      console.log(this.listPlayers);
    });
  }

  getListPlayer() {
    this.playerService.getPlayerList()?.subscribe();
  }


  onKeyUp(event: any) {
    let textSearch: string = event.target.value;
    this.searchList = this.listPlayers?.filter(e => e.firstName.toLowerCase().includes(textSearch.toLowerCase()))
  }

  clickOnDelete(id: number) {
    this.playerService.deletePlayer(id).pipe(
      tap(
        resp => {
          if (resp) {
            this.getListPlayer();
            alert("Estimado cliente se elimino exitosamente")
          } else {
            alert("Estimado cliente se presento un problema al eliminar el registro")
          }
        }
      )
    ).subscribe()
  }


  clickOnEdit(player: Player) {
    this.stateService.setPlayerSelect(player);
    this.router.navigate(['/add']);
  }

  // openDialog() {
  //   this.dialog.open(CdkDialogDataExampleDialog, {
  //     minWidth: '300px',
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }

  add() {
    this.router.navigate(['/add']);
  }

}

