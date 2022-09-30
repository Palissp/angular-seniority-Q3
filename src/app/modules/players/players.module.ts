import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./pages/home/home.page";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from "./components/card/card.component";
import { PlayersService } from "./services/players.service";
import { HttpClientModule } from "@angular/common/http";
import { ModalComponent } from "./components/modal/modal.component";

const routes: Routes = [
	{
		path: "",
		component: HomePage,
	},
	{
		path: "**",
		redirectTo: "",
	},
];

@NgModule({
	declarations: [HomePage, CardComponent, ModalComponent],
	imports: [
		HttpClientModule,
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [RouterModule],
	providers: [PlayersService],
})
export class PlayersModule {}
