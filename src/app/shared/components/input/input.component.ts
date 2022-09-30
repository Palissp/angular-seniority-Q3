import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, NgControl } from "@angular/forms";

@Component({
	selector: "app-input",
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
	@Input() autocomplete: "on" | "off" = "off";
	@Input() autofocus = false;
	@Input() errorHelper = "";
	@Input() fullWidth = false;
	@Input() id = "";
	@Input() label = "";
	@Input() maxLength?: number;
	@Input() name = "";
	@Input() normalHelper = "";
	@Input() pattern = "";
	@Input() placeholder = "Escribe un texto";
	@Input() showMaxLength = false;
	@Input() size = "medium";
	@Input() state = "normal";
	@Input() styleClass = "";
	@Input() textUP = false;
	@Input() type = "text";
	@Input() value: any;
	@Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private control: NgControl) {}

	ngOnInit(): void {}

	handleEvent(event: any) {}

	get formControl() {
		return this.control.control as FormControl;
	}

	get hasErrors() {
		return this.formControl.touched && this.formControl.invalid;
	}

	get inputValue() {
		return this.formControl.value;
	}

	handleClick() {
		this.clickButton.emit(true);
	}
}
