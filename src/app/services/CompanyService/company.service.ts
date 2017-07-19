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
    const URL = this.BASE_API + 'companies';
    const options = {
      headers: this.headers,
      params: { filter: { include: { relation: 'publishes', scope: { fields: ['id'] } } } }
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getById(id: string): Promise<any> {
    const URL = this.BASE_API + 'companies/' + id;
    const options = {
      headers: this.headers
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getPublishes(id: string): Promise<any> {
    const URL = this.BASE_API + 'companies/' + id + '/publishes';
    const options = {
      headers: this.headers,
      params: { filter: { include: ['user', 'comments'] } }
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
}
