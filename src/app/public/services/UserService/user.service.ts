import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../../classes/user.class';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {
  private BASE_API = environment.BASE_API;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private static _loginEmitters: { [value: string]: EventEmitter<any> } = {};
  constructor(private http: Http) { }
  static initSession(value: string): EventEmitter<any> {
    if (!this._loginEmitters[value])
      this._loginEmitters[value] = new EventEmitter();
    return this._loginEmitters[value];
  }
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
      UserService.initSession('session').emit(true);
      return res.json();
    }).catch(this.handleError);
  }
}
