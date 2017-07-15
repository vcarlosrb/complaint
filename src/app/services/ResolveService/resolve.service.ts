import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../../classes/user.class';
import { UserService } from '../UserService/user.service';

@Injectable()
export class UserIdResolve implements Resolve<User> {
  constructor(
    private userService: UserService
  ) { }
  resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
    return this.userService.getById(route.params['user']).then((resolve) => {
      return resolve;
    });
  }
}

@Injectable()
export class CurrentUserResolve implements Resolve<User> {
  constructor(
    private userService: UserService
  ) { }
  resolve(): Promise<any> | any {
    return this.userService.getCurrent().then((resolve) => {
      return resolve;
    });
  }
}
