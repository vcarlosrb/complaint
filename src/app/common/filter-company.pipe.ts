import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterCompany' })
@Injectable()
export class FilterCompanyPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
    if (args) {
      const array = [];
      const myPattern = new RegExp('(\\w*' + args + '\\w*)', 'gi');
      items.map((item) => {
        if (item.name.match(myPattern)) {
          array.push(item);
        }
      });
      return array;
    }
    return items;
  }
}
