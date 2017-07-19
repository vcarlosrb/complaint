import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
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
    const URL = this.BASE_API + 'publishes';
    const options = {
      headers: this.headers, params: { filter: { include: ['user', 'company', 'comments'] } }
    }
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  create(publish: object): Promise<Publish> {
    const URL = this.BASE_API + 'publishes';
    const options = {
      headers: this.headers
    };
    const data = JSON.stringify(publish);
    return this.http.post(URL, data, options).toPromise().then((res) => {
      return res.json() as Publish;
    }).catch(this.handleError);
  }
  like(publishId: string, userId: string): Promise<any> {
    const URL = this.BASE_API + 'publishes/' + publishId + '/like';
    const options = {
      headers: this.headers
    };
    const data = JSON.stringify({ userId: userId });
    return this.http.post(URL, data, options).toPromise().then((res) => {
      return res.json() as any;
    }).catch(this.handleError);
  }
}
