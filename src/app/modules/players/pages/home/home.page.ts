import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HOME_TEXT } from "../../const/home.const";
import { Player } from "../../models/player";
import { PlayersService } from "../../services/players.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	labels = HOME_TEXT;
	searchForm!: FormGroup;
	players: Player[] = [];
	showInterface = false;
	isOpenModal = false;
	term!: string;
	playertoEdit!: Player;
	constructor(
		private fb: FormBuilder,
		private _playersService: PlayersService
	) {}

	ngOnInit(): void {
		this.createSearchForm();
		this.getPlayers();
		this.valuesChanges();
	}

	createSearchForm() {
		this.searchForm = this.fb.group({
			search: ["", [Validators.required, Validators.minLength(3)]],
		});
	}

	getPlayers() {
		this._playersService.getPlayers().subscribe(
			(res) => {
				console.log(res);
				this.players = res;
				this.showInterface = true;
			},
			(err) => {
				console.log(err);
				this.showInterface = true;
			}
		);
	}

	valuesChanges() {
		this.searchForm.valueChanges.subscribe((value) => {
			this.term = value.search;
			if (this.searchForm.valid) {
				this.searchPlayer();
			} else {
				this.getPlayers();
			}
		});
	}

	save(data: Player) {
		this._playersService.savePlayer(data).subscribe((res) => {
			this.players.push(res);
		});
	}

	searchPlayer() {
		this._playersService.searchPlayer(this.term).subscribe((res) => {
			console.log(res);
			this.players = res;
		});
	}

	handleDelete(id: number) {
		this._playersService.deletePlayer(id).subscribe((res) => {
			this.players = this.players.filter((m) => m.id !== id);
		});
	}

	handleEdit(player: Player) {
		this.playertoEdit = player;
		this.isOpenModal = true;
	}

	edit(data: Player) {
		this._playersService.editPlayer(data).subscribe((res) => {
			this.players = this.players.filter((m) => m.id !== data.id);
			this.players.push(data);
		});
	}
}
