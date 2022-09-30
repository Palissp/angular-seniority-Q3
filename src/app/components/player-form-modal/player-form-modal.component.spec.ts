import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormModalComponent } from './player-form-modal.component';

describe('PlayerFormModalComponent', () => {
  let component: PlayerFormModalComponent;
  let fixture: ComponentFixture<PlayerFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
