import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';
import { StateService } from '../../services/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public frmPlayer!: FormGroup;
  player: Player | undefined;

  constructor(private stateService: StateService, private readonly fb: FormBuilder, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.player = this.stateService.playerSelect;
    this.frmPlayer = this.fb.group({
      firstName: [this.player?.firstName ? this.player.firstName : null, [Validators.required]],
      lastName: [this.player?.lastName ? this.player.lastName : null, [Validators.required]],
      image: [this.player?.image ? this.player.image : null, [Validators.required]],
      idPosition: [this.player?.idPosition ? this.player.idPosition : null, [Validators.required]],
      attack: [this.player?.attack ? this.player.attack : null, [Validators.required]],
      defense: [this.player?.defense ? this.player.defense : null, [Validators.required]],
      skills: [this.player?.skills ? this.player.skills : null, [Validators.required]],
    });
  }


  onClickSaveButton() {
    let player: Player;
    player = this.frmPlayer.getRawValue();
    player.idAuthor = this.playerService.getAutorId();


    if (this.player?.id) {

      player.id = this.player.id;
    }

    this.playerService.updatePlayer(player).pipe(
      tap(resp => {
        if (resp) {
          console.log('exito');
          this.onGoToMainPage()
        } else {
          alert("Estimado cliente se produjo un error al agregar la tarea")
        }
      })
    ).subscribe();
  }


  onClickBack() {
    this.onGoToMainPage()
  }

  onGoToMainPage() {
    this.router.navigate(['/']);
  }


}
