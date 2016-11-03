import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: number, args?: any[]): any {
    if (value && !isNaN(value) && args[0] === 'celsius'){
      let temp = (value - 32)*5/9;
      let places = args[1];

      return temp.toFixed(places) + ' C';
    }
    return;
  }

}
