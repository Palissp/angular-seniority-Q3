import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWrapperComponent } from './team-wrapper.component';

describe('TeamWrapperComponent', () => {
  let component: TeamWrapperComponent;
  let fixture: ComponentFixture<TeamWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
