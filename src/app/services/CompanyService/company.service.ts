import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Company } from '../../classes/company.class';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService {
  private BASE_API = environment.BASE_API;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  list(): Promise<any> {
    return this.http.get(this.BASE_API + 'companies', { headers: this.headers }).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
}
