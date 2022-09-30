import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';
  field = '0';

  constructor() { }

  onChange: any = (_: any) => { };
  onTouch: any = () => { };

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.field = value;
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}
