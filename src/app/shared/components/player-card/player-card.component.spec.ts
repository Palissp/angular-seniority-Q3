import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RestService } from '../../../core/services/rest.service';
import { StateService } from '../../../core/services/state.service';
import { editPlayer, players } from '../../mock/mockTest';

import { PlayerCardComponent } from './player-card.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let restService: RestService;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerCardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        RestService,
        StateService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.player = editPlayer
    fixture.detectChanges();
    restService = fixture.debugElement.injector.get(RestService);
    stateService = fixture.debugElement.injector.get(StateService);
  });

  it('should create', () => {
    component.player = editPlayer
    expect(component).toBeTruthy();
  });

  it('onEdit', () => {
    jest.spyOn(stateService, 'setPlayerSelect').mockImplementation(() => of(editPlayer));
    component.onEdit(editPlayer)
    expect(component.showModal).toBeTruthy();
    expect(stateService.setPlayerSelect).toBeCalledWith(editPlayer);
  });

  it('onCloseModal', () => {
    jest.spyOn(restService, 'getPlayerList').mockImplementation(() => of(players));
    component.onCloseModal()
    expect(component.showModal).toBeFalsy();
    expect(restService.getPlayerList).toBeCalled();
  });

  it('onDelete', () => {
    jest.spyOn(restService, 'deletePlayer').mockImplementation(() => of());
    component.onDelete(editPlayer)
    expect(restService.deletePlayer).toBeCalledWith(editPlayer.id);
  });
});
