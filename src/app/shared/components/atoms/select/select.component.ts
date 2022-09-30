import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Position } from '@models/position';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() positions: Position[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
