import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { PlayerService } from "../../services";
import { PlayerModalComponent } from "./player-modal.component";

describe("PlayerModalComponent", () => {
  let component: PlayerModalComponent;
  let service: PlayerService;
  let fixture: ComponentFixture<PlayerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      declarations: [PlayerModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [],
    }).compileComponents();

    service = TestBed.inject(PlayerService);
  });

  beforeEach(() => {
    jest.spyOn(service, "getPositions").mockReturnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should close emit onClose event emitter", () => {
    const spy = jest.spyOn(component.onCancel, "emit");
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it("should call event stop propagation when modal body is clicked", () => {
    const event = { preventDefault: () => {}, stopPropagation: () => {} };
    const spy = jest.spyOn(event, "stopPropagation");
    component.stopPropagation(event);

    expect(spy).toHaveBeenCalled();
  });
});
