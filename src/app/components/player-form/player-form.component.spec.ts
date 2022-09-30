import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormComponent } from './player-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SliderComponent} from "../slider/slider.component";

describe('PlayerFormComponent', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFormComponent, SliderComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
