import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CARD_TEXT } from "../../const/card.const";
import { Player } from "../../models/player";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
	@Input() player!: Player;
	@Output() onEdit: EventEmitter<Player> = new EventEmitter();
	@Output() onDelete: EventEmitter<number> = new EventEmitter();
	labels = CARD_TEXT;
	constructor() {}

	ngOnInit(): void {}
}
