import { Pipe, PipeTransform } from '@angular/core';
import { PlayerModel } from 'src/app/core/models/player.model';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: Array<PlayerModel>, args: string): any {
    return value.filter(word => word.firstName.includes(args));
  }

}
