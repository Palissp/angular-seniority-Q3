import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPlayerComponent } from './datos-player.component';

describe('DatosPlayerComponent', () => {
  let component: DatosPlayerComponent;
  let fixture: ComponentFixture<DatosPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
