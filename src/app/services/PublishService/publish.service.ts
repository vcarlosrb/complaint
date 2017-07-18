import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Publish } from '../../classes/publish.class';
import { environment } from '../../../environments/environment';

@Injectable()
export class PublishService {
  private BASE_API = environment.BASE_API;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  list(): Promise<any> {
    return this.http.get(this.BASE_API + 'publishes', { headers: this.headers, params: { filter: { include: ['user', 'company'] } } })
      .toPromise().then((res) => {
        return res.json();
      }).catch(this.handleError);
  }
  create(publish: object): Promise<Publish> {
    return this.http.post(this.BASE_API + 'publishes', JSON.stringify(publish), { headers: this.headers }).toPromise().then((res) => {
      return res.json() as Publish;
    }).catch(this.handleError);
  }
}
