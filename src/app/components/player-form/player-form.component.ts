import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateService} from "../../services/state-service/state.service";
import {PlayerService} from "../../services/player-service/player.service";
import {IPosition} from "../../interfaces/position.interface";
import {IPlayer} from "../../interfaces/player.interface";

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit, OnDestroy {

    @Input() isModalOpen: boolean = false;
    @Output() atCloseModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Input() mode: "create" | "edit" = "create"
    private readonly ID_AUTOR = '106604416';
    onDestroy$ = new Subject();
    public formGroup: FormGroup;
    firstName: string = ""
    lastName: string = ""
    image: string = ""
    attack: any;
    defense: any;
    skills: any;
    idPosition: string = ''
    positionList: IPosition[] | undefined = []


    constructor(
        private readonly _formBuilder: FormBuilder,
        private state: StateService,
        private playerService: PlayerService
    ) {
        this.formGroup = this._formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            image: [''],
            attack: ['', [Validators.required]],
            defense: ['', [Validators.required]],
            skills: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {
        this.getPositionList()
        this.state.positionsList$.subscribe(resp => this.positionList = resp)
    }

    getPositionList() {
        this.playerService.getPositions()?.subscribe()
    }

    async createPlayer() {
        console.log("calling")
        let player: IPlayer = {
            lastName: this.formGroup.value.lastName,
            firstName: this.formGroup.value.firstName,
            skills: this.formGroup.value.skills,
            defense: this.formGroup.value.defense,
            attack: this.formGroup.value.attack,
            image: this.formGroup.value.image ? this.formGroup.value.image : "",
            idPosition: Number(this.idPosition),
            idAuthor: Number(this.ID_AUTOR)
        }

        await this.playerService.postPlayer(player)
    }


    closeModal() {
        this.isModalOpen = false;
        this.atCloseModal.emit(this.isModalOpen)
    }

    removeListeners() {
        this.onDestroy$.complete();

    }

    ngOnDestroy(): void {
        this.removeListeners();
    }

    get title(): string {
        if (this.mode === "edit") {
            return "Editar Jugador"
        } else {
            return "Crear Jugador"
        }
    }

    setPosition(position: any) {
        console.log(position.value)
        this.idPosition = position.value
    }
}
