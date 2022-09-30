import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClose event emitter when close method is called', () => {
    const spy = jest.spyOn(component.onCancel, 'emit');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should call stopPropagation ', () => {
    const event = { preventDefault: () => {}, stopPropagation: () => {} };
    const spy = jest.spyOn(event, 'stopPropagation');
    component.stopPropagation(event);

    expect(spy).toHaveBeenCalled();
  });
});
