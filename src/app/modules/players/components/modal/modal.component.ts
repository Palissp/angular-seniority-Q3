import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormControl,
} from "@angular/forms";
import { MODAL_TEXT } from "../../const/modal.const";
import { Player } from "../../models/player";
import { environment } from "../../../../../environments/environment.prod";

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
	@Input() isOpen = false;
	@Input() player?: Player;
	@Output() emitData: EventEmitter<Player> = new EventEmitter();
	@Output() emitDataToEdit: EventEmitter<Player> = new EventEmitter();
	@Output() cancel: EventEmitter<Boolean> = new EventEmitter();
	registerForm!: FormGroup;
	labels = MODAL_TEXT;
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.createForm();
		if (this.player) {
			this.setValues();
		}
	}

	getNameControl(nameControl: string) {
		return this.registerForm.get(nameControl) as FormControl;
	}

	createForm() {
		this.registerForm = this.fb.group({
			name: ["", [Validators.required, Validators.minLength(2)]],
			last: ["", [Validators.required]],
			image: ["", [Validators.required]],
			position: ["", [Validators.required]],
			attack: [50, [Validators.required]],
			defense: [70, [Validators.required]],
			skills: [60, [Validators.required]],
		});
	}

	setValues() {
		this.getNameControl("name").setValue(this.player?.firstName);
		this.getNameControl("last").setValue(this.player?.lastName);
		this.getNameControl("image").setValue(this.player?.image);
		this.getNameControl("position").setValue(this.player?.idPosition);
		this.getNameControl("attack").setValue(this.player?.attack);
		this.getNameControl("defense").setValue(this.player?.defense);
		this.getNameControl("skills").setValue(this.player?.skills);
	}

	handleCancel() {
		this.cancel.emit();
		this.registerForm.reset();
	}

	save() {
		const player: Player = {
			firstName: this.getNameControl("name").value,
			lastName: this.getNameControl("last").value,
			image: this.getNameControl("image").value,
			idPosition: this.getNameControl("position").value,
			attack: this.getNameControl("attack").value,
			defense: this.getNameControl("defense").value,
			skills: this.getNameControl("skills").value,
			idAuthor: Number(environment.authorId),
			id: this.player?.id ? this.player.id : 0,
		};
		if (this.player) {
			this.emitDataToEdit.emit(player);
		} else {
			this.emitData.emit(player);
		}
		this.registerForm.reset();
	}
}
