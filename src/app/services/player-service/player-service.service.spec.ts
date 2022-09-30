import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { PlayerServiceService } from './player-service.service';
const mockListOfPlayers = [
  {
    "firstName": "string",
    "lastName": "string",
    "image": "string",
    "attack": 0,
    "defense": 0,
    "skills": 0,
    "idAuthor": 0,
    "idPosition": 0,
    "id": 101
  },
  {
    "firstName": "string",
    "lastName": "string",
    "image": "string",
    "attack": 0,
    "defense": 0,
    "skills": 0,
    "idAuthor": 0,
    "idPosition": 0,
    "id": 102
  }
]
const mockBody = {
  "firstName": "string",
  "lastName": "string",
  "image": "string",
  "attack": 0,
  "defense": 0,
  "skills": 0,
  "idAuthor": 0,
  "idPosition": 0,
  "id": 101
}

describe('PlayerServiceService', () => {
  let service: PlayerServiceService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl + '/player';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerServiceService]
    });
    service = TestBed.inject(PlayerServiceService);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should receive a list of players', (doneFn) => {
    service.getPlayer()
      .subscribe(data => {
        expect(data).toEqual(mockListOfPlayers);
        doneFn();
      })


    const url = apiUrl;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockListOfPlayers);
  });
  it('should return a new player', (doneFn) => {

    service.postPlayer(mockBody)
      .subscribe(data => {
        // Assert
        expect(data).toEqual(mockBody);
        doneFn();
      });

    // http config
    const url = apiUrl;
    const req = httpController.expectOne(url);
    req.flush(mockBody);
    expect(req.request.body).toEqual(JSON.stringify(mockBody));
    expect(req.request.method).toEqual('POST');
  });
  it('should receive a players by ID', (doneFn) => {
    service.getPlayer()
      .subscribe(data => {
        expect(data).toEqual(mockListOfPlayers);
        doneFn();
      })


    const url = apiUrl + '/2';
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockListOfPlayers);
  });

  it('should return a update player', (doneFn) => {

    service.postPlayer(mockBody)
      .subscribe(data => {
        // Assert
        expect(data).toEqual(mockBody);
        doneFn();
      });

    // http config
    const url = apiUrl + '/2';
    const req = httpController.expectOne(url);
    req.flush(mockBody);
    expect(req.request.body).toEqual(JSON.stringify(mockBody));
    expect(req.request.method).toEqual('PATCH');
  });


  it('should delete a player', (doneFn) => {

    service.postPlayer(mockBody)
      .subscribe(data => {
        // Assert
        expect(data).toEqual(mockBody);
        doneFn();
      });

    // http config
    const url = apiUrl + '/2';
    const req = httpController.expectOne(url);
    req.flush(mockBody);
    expect(req.request.method).toEqual('DELETE');
  });

});




