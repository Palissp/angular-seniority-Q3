import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { RestService } from '../../../core/services/rest.service';
import { StateService } from '../../../core/services/state.service';
import { editPlayer, newPlayer } from '../../mock/mockTest';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  let restService: RestService;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [HttpClientTestingModule],
      providers: [
        RestService,
        StateService,
        FormBuilder
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.player = newPlayer
    fixture.detectChanges();
    restService = fixture.debugElement.injector.get(RestService);
    stateService = fixture.debugElement.injector.get(StateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call on Click Add new player', () => {
    jest.spyOn(stateService, 'setPlayerSelect').mockImplementation(() => of(newPlayer));
    jest.spyOn(restService, 'updatePlayer').mockImplementation(() => of(newPlayer));
    component.frm.value.firstName = newPlayer.firstName
    component.frm.value.lastName = newPlayer.lastName
    component.frm.value.image = newPlayer.image
    component.frm.value.attack = newPlayer.attack
    component.frm.value.defense = newPlayer.defense
    component.frm.value.skills = newPlayer.skills
    component.frm.value.idPosition = newPlayer.idPosition
    component.onClickAdd()
    expect(restService.updatePlayer).toBeCalledWith(newPlayer);
  });

  it('call on Click Add edit player', () => {
    jest.spyOn(stateService, 'setPlayerSelect').mockImplementation(() => of(editPlayer));
    jest.spyOn(restService, 'updatePlayer').mockImplementation(() => of(editPlayer));
    component.frm.value.firstName = editPlayer.firstName
    component.frm.value.lastName = editPlayer.lastName
    component.frm.value.image = editPlayer.image
    component.frm.value.attack = editPlayer.attack
    component.frm.value.defense = editPlayer.defense
    component.frm.value.skills = editPlayer.skills
    component.frm.value.idPosition = editPlayer.idPosition
    component.player = editPlayer
    component.onClickAdd()
    expect(restService.updatePlayer).toBeCalledWith(editPlayer);
  });
});
