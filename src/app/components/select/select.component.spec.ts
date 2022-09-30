import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  AbstractControl,
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { SelectComponent } from "./select.component";

class MockedNgControl extends NgControl {
  viewToModelUpdate(newValue: any): void {
    throw new Error("Method not implemented.");
  }

  get control(): AbstractControl | null {
    const control = new FormControl();
    control!.setValidators([Validators.required]);
    control!.setErrors({ invalid: true });
    control!.markAsTouched();
    control!.markAsDirty();
    return control;
  }
}

describe("SelectComponent", () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let ngControl: NgControl;

  beforeEach(async () => {
    ngControl = new MockedNgControl();

    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: NgControl, useValue: ngControl }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.idElement = "id";
    component.label = "label";
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
