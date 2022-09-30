import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { PlayerService } from "./player.service";
import { Player } from "../interfaces";

const playersListResponse: Player[] = [
  {
    attack: 1,
    defense: 1,
    firstName: "Lio",
    lastName: "Messi",
    idPosition: 1,
    image: "",
    skills: 1,
    id: 1,
    idAuthor: 3,
  },
];

describe("PlayerService", () => {
  let service: PlayerService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService],
    });
    service = TestBed.inject(PlayerService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get players list", () => {
    service.getPlayers().subscribe((response) => {
      expect(response).toEqual(playersListResponse);
    });
    const request = httpClient.expectOne(`${service.API_URL}/player`);
    expect(request.request.method).toBe("GET");
    request.flush(playersListResponse);
  });

  it("should create a player", () => {
    const mockRespose = {
      success: true,
    };

    const player: Player = {
      attack: 1,
      defense: 1,
      firstName: "Lio",
      lastName: "Messi",
      idPosition: 1,
      image: "",
      skills: 1,
      id: 1,
      idAuthor: 3,
    };

    service.createPlayer(player).subscribe((response) => {
      expect(response).toEqual(mockRespose);
    });
    const request = httpClient.expectOne(`${service.API_URL}/player`);
    expect(request.request.method).toBe("POST");
    request.flush(mockRespose);
  });

  it("should update player", () => {
    const mockRespose = {
      success: true,
    };

    const player: Player = {
      attack: 1,
      defense: 1,
      firstName: "Lio",
      lastName: "Messi",
      idPosition: 1,
      image: "",
      skills: 1,
      id: 1,
      idAuthor: 3,
    };

    service.updatePlayer(player).subscribe((response) => {
      expect(response).toEqual(mockRespose);
    });

    const request = httpClient.expectOne(
      `${service.API_URL}/player/${player.id}`
    );
    expect(request.request.method).toBe("PATCH");
    request.flush(mockRespose);
  });

  it("should delete player", () => {
    const mockRespose = {
      success: true,
    };

    const deleteId: number = 1;

    service.deletePlayer(deleteId).subscribe((response) => {
      expect(response).toEqual(mockRespose);
    });
    const request = httpClient.expectOne(
      `${service.API_URL}/player/${deleteId}`
    );
    expect(request.request.method).toBe("DELETE");
    request.flush(mockRespose);
  });
});
