import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../config/player.interface';

import { PlayerCardComponent } from './player-card.component';

const mockPlayer: Player = {
  id: 0,
  image: '',
  firstName: '',
  lastName: '',
  attack: 0,
  defense: 0,
  skills: 0,
  idAuthor: 0,
  idPosition: 0
}

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let service: PlayersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.player = mockPlayer;
    service = TestBed.inject(PlayersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deletes a player', () => {
    jest.spyOn(service, 'deletePlayer').mockReturnValue(of({}));
    component.onDelete();
    expect(service.deletePlayer).toHaveBeenCalled();
  });
});
