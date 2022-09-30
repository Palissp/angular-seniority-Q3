import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PageContentComponent } from "./components/page-content/page-content.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SliderComponent } from "../components/slider/slider.component";

@NgModule({
	declarations: [
		PageContentComponent,
		TypographyComponent,
		LoadingComponent,
		InputComponent,
		ButtonComponent,
		SliderComponent,
	],
	imports: [CommonModule, ReactiveFormsModule, FormsModule],
	exports: [
		PageContentComponent,
		TypographyComponent,
		LoadingComponent,
		InputComponent,
		ButtonComponent,
		SliderComponent,
	],
})
export class SharedModule {}
