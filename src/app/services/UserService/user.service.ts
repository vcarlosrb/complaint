import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from '../../classes/user.class';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private BASE_API = environment.BASE_API;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  create(user: object): Promise<User> {
    const URL = this.BASE_API + 'users';
    const data = JSON.stringify(user);
    const options = {
      headers: this.headers
    };
    return this.http.post(URL, data, options).toPromise().then((res) => {
      return res.json() as User;
    }).catch(this.handleError);
  }
  login(user: object): Promise<any> {
    const URL = this.BASE_API + 'users/login';
    const data = JSON.stringify(user);
    const options = {
      headers: this.headers
    };
    return this.http.post(URL, data, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getById(id: string): Promise<any> {
    const URL = this.BASE_API + 'users/' + id;
    const options = {
      headers: this.headers
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getCurrent(): Promise<any> {
    const URL = this.BASE_API + 'users/' + localStorage.getItem('userId');
    const options = {
      headers: this.headers
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getPublishes(id: string): Promise<any> {
    const URL = this.BASE_API + 'users/' + id + '/publishes';
    const options = {
      headers: this.headers,
      params: {
        filter: {
          include: 'company'
        }
      }
    };
    return this.http.get(URL, options).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
}
