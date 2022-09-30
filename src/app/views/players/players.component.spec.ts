import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PlayerService } from "../../services";
import { PlayerPipe } from "../../pipes";
import { Player } from "../../interfaces";
import { PlayersComponent } from "./players.component";
import { of } from "rxjs";

describe("PlayersComponent", () => {
  let component: PlayersComponent;
  let service: PlayerService;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule],
      declarations: [PlayersComponent, PlayerPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    service = TestBed.inject(PlayerService);
  });

  beforeEach(() => {
    jest.spyOn(service, "getPlayers").mockReturnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should ngOnInit call getPlayers", () => {
    const spy = jest.spyOn(component, "getPlayers");
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it("should hidePlayerForm dissmiss form", () => {
    component.hidePlayerForm();
    expect(component.isShowingPlayerForm).toBeFalsy();
  });

  it("should showPlayerForm show form", () => {
    component.showPlayerForm();
    expect(component.isShowingPlayerForm).toBeTruthy();
  });

  it("should setCurrentPlayer show form", () => {
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

    component.setCurrentPlayer(player);

    expect(component.isShowingPlayerForm).toBeTruthy();
  });

  it("should onSubmitFormSuccess get players", () => {
    const spy = jest.spyOn(component, "getPlayers");
    component.onSubmitFormSuccess();
    expect(spy).toHaveBeenCalled();
  });

  it("should deletePlayer call service to delete", () => {
    const spy = jest.spyOn(service, "deletePlayer");
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

    component.deletePlayer(player);
    expect(spy).toHaveBeenCalled();
  });
});
