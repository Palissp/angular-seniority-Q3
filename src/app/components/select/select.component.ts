import { Component, Input, OnInit } from "@angular/core";
import { FormControl, NgControl } from "@angular/forms";
import { SelectOption } from "../../interfaces";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  @Input() idElement: string = "";
  @Input() label: string = "";
  @Input() options: SelectOption[] = [];

  constructor(private readonly _control: NgControl) {}

  ngOnInit(): void {}

  get formControl() {
    return this._control.control as FormControl;
  }
}
