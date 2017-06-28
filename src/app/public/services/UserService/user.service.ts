import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { User } from '../../classes/user.class';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {
  private BASE_API = environment.BASE_API;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private subject = new Subject<any>();
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
      this.subject.next({ login: res.json() });
      return res.json();
    }).catch(this.handleError);
  }
  session(): Observable<any> {
    return this.subject.asObservable();
  }
}
