import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../sevices/modal.service';
import { Player } from '../../models/player.model';
import { EquiposService } from '../../sevices/equipos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  title = 'Agregar jugador';
  players: Player[] = [];
  playersSearch: Player[] = [];
  playerForm!: FormGroup;
  open() {
    this.modalService.open();
  }

  constructor(
    private readonly _playerService: EquiposService,
    private modalService: ModalService,
    private readonly fb: FormBuilder
  ) {
    this.formSave();
  }

  ngOnInit(): void {
    this.getAll();
  }

  private formSave(): void {
    this.playerForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      image: [null, [Validators.required]],
      attack: [null, [Validators.required]],
      defense: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      idPosition: [null, [Validators.required]],
    });
  }
  getAll(): void {
    this._playerService.getAll().subscribe((players: Player[]) => {
      this.players = players;
      this.playersSearch = players;
    });
  }

  searchKey(value: string) {
    if (value.length > 0) {
      this.playersSearch = this.players.filter(
        (player: Player) => player.firstName === value
      );
    } else {
      this.playersSearch = this.players;
    }
  }
  create() {
    this.playerForm.reset();
    this.title = 'Agregar jugador';
    this.open();
  }
  delete(player: Player) {
    console.log('eliminar', player);
  }
  edit(player: Player) {
    this.playerForm.controls['firstName'].setValue(player.firstName);
    this.playerForm.controls['lastName'].setValue(player.lastName);
    this.playerForm.controls['image'].setValue(player.image);
    this.playerForm.controls['attack'].setValue(player.attack);
    this.playerForm.controls['defense'].setValue(player.defense);
    this.playerForm.controls['skills'].setValue(player.skills);
    this.playerForm.controls['idPosition'].setValue(player.idPosition);
    this.title = 'Editar jugador';
    this.open();
  }

  save() {}
}
