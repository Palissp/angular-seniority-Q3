import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerCardComponent} from './player-card.component';
import {PlayerService} from "../../services/player.service";
import {queryByCss, testIdSelector} from "../../spec-helpers/element.spect-helper";
import {of} from "rxjs";

describe('PlayerCardComponent', () => {
    let component: PlayerCardComponent;
    let fixture: ComponentFixture<PlayerCardComponent>;

    let playerServiceMock = {
        deletePlayerById: jest.fn()
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlayerCardComponent],
            providers: [
                {provide: PlayerService, useValue: playerServiceMock},
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerCardComponent);
        component = fixture.componentInstance;
        component.player = {
            "id": 1,
            firstName: "Cristiano",
            lastName: "Ronaldo",
            skills: 1,
            defense: 1,
            attack: 1,
            image: "CCC",
            idPosition: 1
        }
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should call "deletePlayerById" method when user clicks on delete icon', () => {

        const playerServiceSpy = jest.spyOn(playerServiceMock, 'deletePlayerById')
            .mockImplementation(() => of({}))

        const deleteEl = queryByCss(fixture, testIdSelector('delete'))

        deleteEl.nativeElement.dispatchEvent(new Event('click'))

        expect(playerServiceSpy).toBeCalled()

    })
});
