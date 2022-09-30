import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJugadorComponent } from './modal-jugador.component';

describe('ModalJugadorComponent', () => {
  let component: ModalJugadorComponent;
  let fixture: ComponentFixture<ModalJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
