import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Player } from "../../interfaces";
// import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-player-card",
  templateUrl: "./player-card.component.html",
  styleUrls: ["./player-card.component.scss"],
})
export class PlayerCardComponent implements OnInit {
  @Input() player!: Player;
  @Output() onEmitPlayerToEdit = new EventEmitter<Player>();
  @Output() onEmitPlayerToDelete = new EventEmitter<Player>();

  constructor() {}

  ngOnInit(): void {}

  onClickEdit() {
    this.onEmitPlayerToEdit.emit(this.player);
  }

  onClickDelete() {
    this.onEmitPlayerToDelete.emit(this.player);
  }
}
