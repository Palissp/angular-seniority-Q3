import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from "../../interfaces/player.interface";
import {PlayerService} from "../../services/player.service";

@Component({
    selector: 'app-player-card',
    templateUrl: './player-card.component.html',
    styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

    @Input() player!: Player
    @Output() refreshTable: EventEmitter<any> = new EventEmitter<any>()
    showModal:boolean = false

    constructor(private _playerService: PlayerService) {
    }

    ngOnInit(): void {
    }

    deletePlayer() {
        console.log("delete")
        this._playerService.deletePlayerById(this.player.id).subscribe({
            next: () => {
                this.refreshTable.emit(true)
            }
        })
    }

}
