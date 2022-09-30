import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayerCardComponent } from "./player-card.component";

describe("PlayerCardComponent", () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerCardComponent],
      imports: [HttpClientModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.player = {
      id: 1,
      firstName: "name",
      lastName: "name",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
      attack: 1,
      defense: 1,
      skills: 2,
      idAuthor: 3,
      idPosition: 4,
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should onClickDelete emit the current player to delete", () => {
    jest.spyOn(component.onEmitPlayerToDelete, "emit");
    component.onClickDelete();
    expect(component.onEmitPlayerToDelete.emit).toHaveBeenCalled();
  });

  it("should onClickEdit emit the current player to edit", () => {
    jest.spyOn(component.onEmitPlayerToEdit, "emit");
    component.onClickEdit();
    expect(component.onEmitPlayerToEdit.emit).toHaveBeenCalled();
  });
});
