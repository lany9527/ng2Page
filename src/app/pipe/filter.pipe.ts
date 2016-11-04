import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, conditions?:{[field: string]: any}): Array<any> {
    return items.filter(item=> {
      for (let field in conditions){
        if (item[field] !== conditions[field]){
          return false;
        }
      }
      return true;
    });
  }

}
/*
*
* http://www.morphatic.com/2016/06/23/creating-a-filter-pipe-for-angular-2-in-ionic-2/
* */