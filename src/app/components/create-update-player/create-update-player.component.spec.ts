import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePlayerComponent } from './create-update-player.component';

describe('CreateUpdatePlayerComponent', () => {
  let component: CreateUpdatePlayerComponent;
  let fixture: ComponentFixture<CreateUpdatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdatePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
