import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  PlayerCardComponent,
  PlayerModalComponent,
  SliderComponent,
  InputComponent,
  SelectComponent,
} from "./components";
import { PlayersComponent } from "./views";
import { PlayerPipe } from "./pipes";

@NgModule({
  declarations: [
    AppComponent,

    //components
    SliderComponent,
    PlayerCardComponent,
    PlayersComponent,
    PlayersComponent,
    PlayerModalComponent,
    InputComponent,
    SelectComponent,

    //pipes
    PlayerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
