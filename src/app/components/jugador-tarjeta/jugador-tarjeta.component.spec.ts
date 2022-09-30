import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorTarjetaComponent } from './jugador-tarjeta.component';

describe('JugadorTarjetaComponent', () => {
  let component: JugadorTarjetaComponent;
  let fixture: ComponentFixture<JugadorTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
