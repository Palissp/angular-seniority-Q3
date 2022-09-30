import { Pipe, PipeTransform } from "@angular/core";
import { Player } from "../interfaces";

@Pipe({
  name: "filterPlayer",
})
export class PlayerPipe implements PipeTransform {
  transform(players: Player[], name: string): Player[] {
    return players.filter((player) =>
      `${player.firstName} ${player.lastName}`
        .toLowerCase()
        .includes(name.toLowerCase())
    );
  }
}
