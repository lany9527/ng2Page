import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSuffix'
})
export class CustomSuffixPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value && !isNaN(value) && args[0] === 'celsius'){
      let temp = (value -32)*5/9;
      let places = args[1];

      return temp.toFixed(places)+' C';
    }
    return;
  }

}
