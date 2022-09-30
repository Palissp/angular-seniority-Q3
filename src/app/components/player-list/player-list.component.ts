import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../../interfaces/player.interface";
import {PlayerService} from "../../services/player.service";

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

    playerList$!: Observable<Player[]> | undefined
    searchText: string = ""
    showModal: boolean = false


    constructor(private _playerService: PlayerService) {
        this.playerList$ = this._playerService.getPlayerList()
    }

    ngOnInit(): void {
    }

    refreshTable() {
        this.playerList$ = this._playerService.getPlayerList()
    }

}
