import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RestService } from '../core/services/rest.service';
import { StateService } from '../core/services/state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { players, positions } from '../shared/mock/mockTest';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let restService: RestService;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [
        RestService,
        StateService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    restService = fixture.debugElement.injector.get(RestService);
    jest.spyOn(restService, 'getPlayerList').mockImplementation(() => of(players));
    jest.spyOn(restService, 'getPositions').mockImplementation(() => of(positions));
    stateService = fixture.debugElement.injector.get(StateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call on add player', () => {
    component.onAddPlayer()
    expect(component.showModal).toBeTruthy();
  });

  it('Call on close modal', () => {
    component.onCloseModal()
    expect(component.showModal).toBeFalsy();
  });
});
