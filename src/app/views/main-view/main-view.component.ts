import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
    searchString: string = "";
    isModalOpen: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal($event: boolean) {
       this.isModalOpen = $event
    }
}
