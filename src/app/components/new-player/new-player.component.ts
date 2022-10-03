import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { Position } from 'src/app/models/position';
import { PlayerService } from 'src/app/services/player.service';
import { PositionService } from 'src/app/services/position.service';




@Component({
  selector: 'app-player-modal',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {
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

  constructor(private positionsService: PositionService, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.playerToEdit.subscribe(value => {
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
      console.log("Posiciones:"+this.positions);
    });
  }

  onImgError(event: Event){
    (event.target as HTMLImageElement).src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  }

  onClose() {
    document.getElementById('newPlayer')!.style.display = 'none';
  }

  onSubmit() {
    if (this.playerForm.invalid) {
      this.playerForm.markAllAsTouched();
      return;
    }
    if (this.playerToEdit) {
      this.playerService.editPlayer({ ...this.playerForm.value, id: this.playerToEdit.id }).subscribe(response => {
        this.onClose();
        alert('Jugador editado exitosamente');
      });
      return;
    }
    this.playerService.createPlayer(this.playerForm.value).subscribe(response => {
      this.onClose();
      alert('Jugador creado exitosamente');
    });
  }
}