import { Injectable } from '@angular/core';
import { Company } from '../../classes/company.class';

@Injectable()
export class UtilService {
  validEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  filterListCompany(name: string, array: Company[]): any {
    const result = [];
    const myPattern = new RegExp('(\\w*' + name + '\\w*)', 'gi');
    array.map((item) => {
      if (item.name.match(myPattern)) {
        result.push(item);
      }
    });
    return result;
  }
}
