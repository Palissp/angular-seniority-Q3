import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Player } from '../models/Player';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpTesting: HttpTestingController;
  const ENPOINT = 'https://api-exercise-q3.herokuapp.com';
  const ID_AUTOR = 2;
  const mockPlayer1: Player = {
    id: 1,
    attack: 26,
    firstName: 'Leo',
    lastName: 'Mesi',
    defense: 25,
    skills: 25,
    image: 'dsds',
    idAuthor: 2,
    idPosition: 1
  }

  const mockPlayer2: Player = {
    id: 2,
    attack: 26,
    firstName: 'Leo',
    lastName: 'Mesi',
    defense: 25,
    skills: 25,
    image: 'dsds',
    idAuthor: 2,
    idPosition: 1
  }

  const mockPlayer3: Player = {
    id: 3,
    attack: 26,
    firstName: 'Leo',
    lastName: 'Mesi',
    defense: 25,
    skills: 25,
    image: 'dsds',
    idAuthor: 2,
    idPosition: 1
  }


  const mockArray: Player[] = [mockPlayer1, mockPlayer2];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(PlayerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a valid baseUrl when service is created', () => {
    expect(service.ENPOINT).toContain(ENPOINT);
  });


  it('new', () => {

    const apiurl = `${ENPOINT}/player`;

    service.updatePlayer(mockPlayer3).subscribe((data) => {
      expect(data).toEqual(mockPlayer3);
    });

    const req = httpTesting.expectOne({
      method: 'POST',
      url: apiurl,
    });

    req.flush(mockPlayer3);
  });

  it('edit', () => {

    const update1: Player = {
      id: 1,
      attack: 26,
      firstName: 'Leonel',
      lastName: 'Mesi',
      defense: 25,
      skills: 25,
      image: 'dsds',
      idAuthor: 2,
      idPosition: 1
    }

    service.updatePlayer(update1).subscribe((data) => {
      expect(data).toEqual(update1);
    });

    const req = httpTesting.expectOne({
      method: 'PATCH',
      url: `${ENPOINT}/player/${update1.id}`,
    });

    req.flush(update1);
  });

  it('delete', () => {
    service.deletePlayer(mockPlayer1.id).subscribe((data) => {
      expect(data).toEqual(mockPlayer2);
    });

    const req = httpTesting.expectOne({
      method: 'DELETE',
      url: `${ENPOINT}/player/${mockPlayer2.id}`,
    });

    req.flush(mockPlayer2);
  });

});
