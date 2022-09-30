import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control'
  @Output() onKeyUpEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null));
    }
  }

  onKeyUp(event: any) {
    this.onKeyUpEvent.emit(event);
  }
}
