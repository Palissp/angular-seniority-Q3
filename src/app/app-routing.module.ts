import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayersComponent } from "./views";

const routes: Routes = [
  {
    path: "",
    component: PlayersComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
