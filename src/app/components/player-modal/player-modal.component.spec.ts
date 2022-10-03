import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PositionsService } from '../../services/positions.service';
import { Player } from '../../config/player.interface';
import { PlayersService } from '../../services/players.service';

import { PlayerModalComponent } from './player-modal.component';
import { of } from 'rxjs';

const mockPlayer: Player = {
  id: 0,
  image: '',
  firstName: 'test',
  lastName: 'test',
  attack: 0,
  defense: 0,
  skills: 0,
  idAuthor: 0,
  idPosition: 0
}

describe('PlayerModalComponent', () => {
  let component: PlayerModalComponent;
  let fixture: ComponentFixture<PlayerModalComponent>;
  let playersService: PlayersService;
  let positionsService: PositionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerModalComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModalComponent);
    component = fixture.componentInstance;
    playersService = TestBed.inject(PlayersService);
    positionsService = TestBed.inject(PositionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets value if player found', () => {
    playersService.playerToEdit.next(mockPlayer);
    jest.spyOn(component.playerForm, 'setValue');
    component.ngOnInit();
    expect(component.playerForm.setValue).toHaveBeenCalled();
  });

  it('gets positions onInit', () => {
    jest.spyOn(positionsService, 'getPositions').mockReturnValue(of([]));
    component.ngOnInit();
    expect(component.positions).toEqual([]);
  });
});
