import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { Player} from '../../interface/player.interface';
import { environment } from '../../../environments/environment';
import {PositionPlayer} from "../../interface/position.interface";
describe('CardService', () => {
  let service: CardService;
  let http: HttpTestingController;
  let URL = environment.api

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    http = TestBed.inject(HttpTestingController );
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should bring the get method with a players', (done) => {
    const mockPlayer: Player []= [
      {
        id: '135',
        firstName: 'mesi',
        lastName: 'mati',
        image: 'sasasas',
        attack: 26,
        defense: 20,
        skills: 73,
        idAuthor: 2,
        idPosition: 1
      },
      {
        id: '157',
        firstName: "Leonardo",
        lastName: "Messi",
        image: " \"https://www.americaeconomia.com/media-library/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNjk4OTcwNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2NTcyODI3MX0.FtAMQnPjZbVBchuEOvW9olRWVBBOFClH2gnjCJH_FO8/image.jpg?width=980\"",
        attack: 77,
        defense: 31,
        skills: 73,
        idAuthor: 2,
        idPosition: 1
      }
    ];
    service.getPlayers().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(mockPlayer)
      done();
    });

    let url = URL + '/player'
    const req = http.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush(mockPlayer);
  });


  it('should bring the get method with a position', (done) => {
    const mockPosition: PositionPlayer []= [
      {
        id: 1,
        description: "Delantero"
      },
      {
        id: 2,
        description: "Extremo Izq"
      },
      {
        id: 3,
        description: "Extremo Der"
      },
      {
        id: 4,
        description: "Media Punta"
      },
      {
        id: 5,
        description: "Defensa Central"
      },
      {
        id: 6,
        description: "Volante de corte"
      },
      {
        id: 7,
        description: "Volante mixto"
      },
      {
        id: 8,
        description: "Lateral"
      }
    ];
    service.getPlayerPosition().subscribe(res => {
      expect(res.description).toBe(1);
      expect(res).toEqual(mockPosition)
      done();
    });

    let url = URL + '/position'
    const req = http.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosition);
  });


});
