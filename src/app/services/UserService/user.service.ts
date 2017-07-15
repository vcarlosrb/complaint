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
    return this.http.post(this.BASE_API + 'users', JSON.stringify(user), { headers: this.headers }).toPromise().then((res) => {
      return res.json() as User;
    }).catch(this.handleError);
  }
  login(user: object): Promise<any> {
    return this.http.post(this.BASE_API + 'users/login', JSON.stringify(user), { headers: this.headers }).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getById(id: string): Promise<any> {
    return this.http.get(this.BASE_API + 'users/' + id, { headers: this.headers }).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
  getCurrent(): Promise<any> {
    return this.http.get(this.BASE_API + 'users/' + localStorage.getItem('userId'), { headers: this.headers }).toPromise().then((res) => {
      return res.json();
    }).catch(this.handleError);
  }
}
