import { Player } from './../models/player';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroPorNombre',
})
export class FiltroPorNombrePipe implements PipeTransform {
  transform(items: Player[], value: string): any {    
    if (items.length === 0 || !items) {
      return items;
    }
    return items.filter((item) => item.firstName.toLowerCase().indexOf(value.toLowerCase()) >= 0);
  }
}
