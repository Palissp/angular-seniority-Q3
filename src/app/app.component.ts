import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlayerService} from "./services/player.service/player.service.service";
import {Player, Position} from "./core/models/player.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild("modal", { static: true }) modal: ElementRef = {} as ElementRef;
  buscador = '';
  players: Player[] = [];
  positions: Position[] = [];
  title = 'jest-angular';
  public frmPlayer!: FormGroup;
  img = '';

  constructor(private playerService: PlayerService,
              private readonly fb: FormBuilder,
    ) {
  }

  ngOnInit() {
    this.getPlayers();
    this.frmPlayer = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      image: ['', [Validators.required]],
      attack: [null, [Validators.required]],
      defense: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      position: [1, [Validators.required]],
    });
  }

  buscar() {
    if(this.buscador !== '') {
      this.players = this.players.filter(p => p.firstName.toLowerCase().includes(this.buscador.toLowerCase()) || p.lastName.toLowerCase().includes(this.buscador.toLowerCase()));
    } else {
      this.getPlayers();
    }

  }

  getPlayers() {
    this.playerService.getPlayers()
        .subscribe(data => {
          this.players = data;
        });
  }

  getPosition() {
    this.playerService.getPositions()
        .subscribe(data => {
          this.positions = data;
          console.log(data);
        });
  }

  openModal() {
    this.modal.nativeElement.style.display = "block";
    this.getPosition();
  }

  closeModal() {
    this.modal.nativeElement.style.display = "none";
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id)
        .subscribe(data => {
          this.getPlayers();
        });
    ;
  }

  savePlater(){
    const player: Player = {
      id: 0,
      firstName: this.frmPlayer.controls['firstName'].value,
      lastName: this.frmPlayer.controls['lastName'].value,
      image: this.frmPlayer.controls['image'].value,
      attack: this.frmPlayer.controls['attack'].value,
      defense: this.frmPlayer.controls['defense'].value,
      skills: this.frmPlayer.controls['skills'].value,
      idAuthor: environment.author,
      idPosition: this.frmPlayer.controls['position'].value,
    };

    this.playerService.postPlayer(player)
        .subscribe(data => {
          this.closeModal();
          this.getPlayers();
        });
  }

  chargeImage() {
    this.img = this.frmPlayer.controls['image'].value;
  }
}
