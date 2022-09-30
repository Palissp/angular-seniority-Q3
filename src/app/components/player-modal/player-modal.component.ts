import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from "../../services";
import { Player, SelectOption } from "../../interfaces";
import { EMPTY_PLAYER } from "../../utils";

@Component({
  selector: "app-player-modal",
  templateUrl: "./player-modal.component.html",
  styleUrls: ["./player-modal.component.scss"],
})
export class PlayerModalComponent implements OnInit, OnChanges {
  @Input() isModalOpen: boolean = true;
  @Input() idElement: string = "container-modal";
  @Input() size: "sm" | "md" | "lg" = "lg";
  @Input() player: Player = { ...EMPTY_PLAYER };

  @Output() onCancel = new EventEmitter<any>();
  @Output() onSuccess = new EventEmitter<any>();

  playerForm!: FormGroup;
  positionsOptions: SelectOption[] = [];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _playerService: PlayerService
  ) {
    this.initPlayerForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as any).player) {
      if (this.player.id) {
        this.playerForm.patchValue(this.player);
      } else {
        this.playerForm.patchValue({
          firstName: "",
          lastName: "",
          image: "",
          attack: 0,
          defense: 0,
          skills: 0,
          idPosition: undefined,
        });
      }
    }
  }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions() {
    this._playerService.getPositions().subscribe((data) => {
      this.positionsOptions = [...data];
    });
  }

  initPlayerForm() {
    this.playerForm = this._fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      image: ["", [Validators.required]],
      attack: [0, [Validators.required]],
      defense: [0, [Validators.required]],
      skills: [0, [Validators.required]],
      idPosition: [undefined, [Validators.required]],
    });
  }

  submitForm() {
    if (!this.player.id) {
      this.createPlayer();
    } else {
      this.updatePlayer();
    }
  }

  createPlayer() {
    const playerFormValue = this.playerForm.value;
    const dateOfCreation: string = new Date().toString();
    const player: Player = {
      ...playerFormValue,
      category: "main",
      createdAt: dateOfCreation,
      updatedAt: dateOfCreation,
    };

    this._playerService.createPlayer(player).subscribe((_) => {
      this._emitSuccess();
      this.close();
    });
  }

  updatePlayer() {
    const { firstName, lastName, image, attack, defense, skills, idPosition } =
      this.playerForm.value;

    const playerToUpdate: Player = {
      ...this.player,
      firstName,
      lastName,
      image,
      attack,
      defense,
      skills,
      idPosition,
    };

    this._playerService.updatePlayer(playerToUpdate).subscribe((_) => {
      this._emitSuccess();
      this.close();
    });
  }

  private _emitSuccess() {
    this.onSuccess.emit();
  }

  get playerImage(): string {
    return this.playerForm.value.image;
  }

  get modalTitle(): string {
    return this.player.id ? "Editar jugador" : "Agregar jugador";
  }

  get modalButtonText(): string {
    return this.player.id ? "Editar" : "Agregar";
  }

  get isButtonDisabled(): boolean {
    return this.playerForm.invalid;
  }

  close() {
    this.player = { ...EMPTY_PLAYER };
    this.onCancel.emit();
  }

  stopPropagation($event: any) {
    $event.stopPropagation();
  }
}
