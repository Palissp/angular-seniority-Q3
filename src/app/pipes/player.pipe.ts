import {Pipe, PipeTransform} from '@angular/core';
import {Player} from "../interfaces/player.interface";

@Pipe({
    name: 'player'
})
export class PlayerPipe implements PipeTransform {

    transform(array: Player [] | null, filter: string): Player[] | null {
        let returnArray: Player[] | null = array

        if (!returnArray || !filter) {
            return returnArray
        } else {
            filter = filter.toUpperCase()
            returnArray = returnArray.filter(({firstName, lastName}) =>
                firstName.toUpperCase().includes(filter) ||
                lastName.toUpperCase().includes(filter)
            )
        }

        return returnArray;
    }

}
