import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PlayerService } from './player.service';
import { environment } from '../../../../../environments/environment';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpTestingController: HttpTestingController;
  let apiURL: string = environment.api;

  const foundPlayer = {
    id: '1',
    firstName: 'Leo',
    lastName: 'Messi',
    image: 'imagen',
    attack: 90,
    deffense: 70,
    skills: 90,
    idAuthor: 25,
    idPosition: 1,
  }

  const newPlayer = {
    id: null,
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    image: 'imagen',
    attack: 80,
    deffense: 80,
    skills: 80,
    idAuthor: 25,
    idPosition: 1,
  }

  const editPlayer = {
    id: '1',
    firstName: 'Lionel',
    lastName: 'Messi',
    image: 'imagen',
    attack: 90,
    deffense: 70,
    skills: 90,
    idAuthor: 25,
    idPosition: 1,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlayerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call getAllPlayers", (done) => {
    const mockDataDto: any = [];
    const mockDataResponse: any = [];

    service.getAllPlayers('25')
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/player`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });

  it("should call getPlayerById", (done) => {
    const mockDataDto: any = foundPlayer;

    const mockDataResponse: any = foundPlayer;

    service.getPlayerById('1')
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/player/1`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });

  it("should call createPlayer", (done) => {
    const mockDataDto: any = newPlayer;

    const mockDataResponse: any = newPlayer;

    service.createPlayer(mockDataDto)
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/player`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('POST');

    req.flush(mockDataDto);
  });

  it("should call updatePlayer", (done) => {
    const mockDataDto: any = editPlayer;

    const mockDataResponse: any = editPlayer;

    service.updatePlayer(mockDataDto)
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/player/2`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('PATCH');

    req.flush(mockDataDto);
  });
});
