import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './modal.component';
import { EventBusService } from '@pichincha/angular-sdk/eventbus';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), TranslateModule.forRoot()],
      declarations: [ModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [EventBusService],
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

  it('should close emit onClose event emitter', () => {
    const spy = jest.spyOn(component.onCancel, 'emit');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should call event stop propagation when modal body is clicked', () => {
    const event = { preventDefault: () => {}, stopPropagation: () => {} };
    const spy = jest.spyOn(event, 'stopPropagation');
    component.stopPropagation(event);

    expect(spy).toHaveBeenCalled();
  });
});
