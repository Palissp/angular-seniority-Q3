import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit, OnDestroy {

    @Input() isModalOpen: boolean = false;
    onDestroy$ = new Subject();

    constructor() {
    }

    ngOnInit(): void {
    }



    closeModal() {
        this.isModalOpen = false;
    }

    removeListeners() {
        this.onDestroy$.complete();

    }

    ngOnDestroy(): void {
        this.removeListeners();
    }

}
