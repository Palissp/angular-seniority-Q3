import { Component, Input, OnInit } from "@angular/core";
import COLORS from "../../../../theme/color";

@Component({
	selector: "app-typography",
	templateUrl: "./typography.component.html",
	styleUrls: ["./typography.component.scss"],
})
export class TypographyComponent implements OnInit {
	@Input() variant = "p";
	@Input() color = "black";
	@Input() weight = "normal";

	ngOnInit() {}

	getColor(colorText: string) {
		switch (colorText) {
			case "blue":
				return COLORS.blue500;
			case "yellow":
				return COLORS.yellow500;
			case "grey":
				return COLORS.darkGrey500;
			case "white":
				return COLORS.white;
			case "error":
				return COLORS.danger;
			default:
				return COLORS.black;
		}
	}
}
