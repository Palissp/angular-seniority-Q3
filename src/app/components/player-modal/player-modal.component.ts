import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../config/player.interface';
import { Position } from '../../config/position.interface';
import { PlayersService } from '../../services/players.service';
import { PositionsService } from '../../services/positions.service';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss']
})
export class PlayerModalComponent implements OnInit {
  positions: Position[] = [];
  playerToEdit: Player | null = null;
  playerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    idPosition: new FormControl(null, [Validators.required]),
    attack: new FormControl(55, [Validators.required]),
    defense: new FormControl(55, [Validators.required]),
    skills: new FormControl(55, [Validators.required]),
  });

  constructor(private positionsService: PositionsService, private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.playerToEdit.subscribe(value => {
      if (value) {
        this.playerToEdit = value;
        this.playerForm.setValue({
          firstName: value.firstName,
          lastName: value.lastName,
          image: value.image,
          idPosition: value.idPosition,
          attack: value.attack,
          defense: value.defense,
          skills: value.skills
        });
      }
    });
    this.positionsService.getPositions().subscribe(data => {
      this.positions = data as Position[];
    });
  }

  onImgError(event: Event){
    (event.target as HTMLImageElement).src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  }

  onClose() {
    document.getElementById('playerModal')!.style.display = 'none';
  }

  onSubmit() {
    if (this.playerForm.invalid) {
      this.playerForm.markAllAsTouched();
      return;
    }
    if (this.playerToEdit) {
      this.playersService.editPlayer({ ...this.playerForm.value, id: this.playerToEdit.id }).subscribe(response => {
        this.onClose();
        alert('Jugador editado exitosamente');
      });
      return;
    }
    this.playersService.createPlayer(this.playerForm.value).subscribe(response => {
      this.onClose();
      alert('Jugador creado exitosamente');
    });
  }
}
