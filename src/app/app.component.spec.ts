import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Player } from './config/player.interface';
import { PlayersService } from './services/players.service';

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

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let service: PlayersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    service = TestBed.inject(PlayersService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jest-angular'`, () => {
    expect(app.title).toEqual('jest-angular');
  });

  it('gets players onInit', () => {
    jest.spyOn(app, 'getPlayers');
    app.ngOnInit();
    expect(app.getPlayers).toHaveBeenCalled();
  });

  it('gets players from API on getPlayers', async() => {
    jest.spyOn(service, 'getPlayersByAuthor').mockImplementation(() => of([]));
    await app.getPlayers();
    expect(app.players).toEqual([]);
  });

  it('filters players onSearch', () => {
    app.players = [mockPlayer, {...mockPlayer, firstName: 'not', lastName: 'not'}];
    app.searchTerm = 'test';
    app.onSearch();
    expect(app.playersToShow).toEqual([mockPlayer]);
  });

  it('sends null as playerToEdit onAdd', () => {
    jest.spyOn(service.playerToEdit, 'next');
    app.onAdd();
    expect(service.playerToEdit.next).toHaveBeenCalled();
  });
});
