import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerListComponent} from './player-list.component';
import {of} from "rxjs";
import {PlayerService} from "../../services/player.service";
import {PlayerPipe} from "../../pipes/player.pipe";
import {FormsModule} from "@angular/forms";

describe('PlayerListComponent', () => {
    let component: PlayerListComponent;
    let fixture: ComponentFixture<PlayerListComponent>;

    let playerServiceMock = {
        getPlayerList: jest.fn()
            .mockImplementation(() => of([]))
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PlayerListComponent, PlayerPipe],
            providers: [
                {provide: PlayerService, useValue: playerServiceMock},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call "getPlayerList" method when fn[refreshTable] is called', () => {

        const playerServiceSpy = jest.spyOn(playerServiceMock, 'getPlayerList')

        component.refreshTable()

        expect(playerServiceSpy).toBeCalled()

    })
});
