import { TestBed } from "@angular/core/testing";
import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { PlayersService } from "./players.service";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Player } from "../models/player";
import { environment } from "../../../../environments/environment.prod";

const players: Player[] = [
	{
		id: 29,
		firstName: "Leo",
		lastName: "Messi",
		image: "https://i.pinimg.com/236x/58/a8/5d/58a85d8b9d081e51d59db9534341b7c3.jpg",
		attack: 100,
		defense: 100,
		skills: 100,
		idAuthor: 1,
		idPosition: 1,
	},
];

describe("PlayersService", () => {
	let service: PlayersService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PlayersService],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
		});
	});
	beforeEach(() => {
		service = TestBed.inject(PlayersService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("getPlayers devuelve todos los jugadores", () => {
		service.getPlayers().subscribe((res: Player[]) => {
			expect(res).toEqual(players);
		});

		const req = httpMock.expectOne(
			`${environment.apiUrl}/${environment.authorId}`
		);
		expect(req.request.method).toBe("GET");
		req.flush(players);
	});

	it("searchPlayer devuelve jugador/s", () => {
		const term = "mes";
		service.searchPlayer(term).subscribe((res: Player[]) => {
			expect(res).toEqual(players);
		});

		const req = httpMock.expectOne(
			`${environment.apiUrl}/${environment.authorId}/${term}`
		);
		expect(req.request.method).toBe("GET");
		req.flush(players);
	});
});
