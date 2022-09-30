import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-player-form-modal',
    templateUrl: './player-form-modal.component.html',
    styleUrls: ['./player-form-modal.component.scss']
})
export class PlayerFormModalComponent implements OnInit {

    @Input() title: string = ""
    @Output() closeModal:EventEmitter<any> = new EventEmitter<any>()


    constructor() {
    }

    ngOnInit(): void {
    }

}
