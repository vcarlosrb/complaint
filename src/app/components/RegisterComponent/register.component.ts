import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';
import { UtilService } from '../../services/UtilService/util.service';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService, UtilService]
})

export class RegisterComponent {
  valid: {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    password: boolean
  };
  constructor(
    private userService: UserService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.valid = {
      firstName: false,
      lastName: false,
      email: false,
      password: false
    };
  }
  validate(firstName: string, lastName: string, email: string, password: string): boolean {
    this.valid.firstName = (firstName === undefined || firstName === '');
    this.valid.lastName = (lastName === undefined || lastName === '');
    this.valid.email = (email === undefined || email === '');
    if (!this.valid.email) {
      this.valid.email = !this.utilService.validEmail(email);
    }
    this.valid.password = (password === undefined || password === '');

    return (!this.valid.firstName && !this.valid.lastName && !this.valid.email && !this.valid.password);
  }
  register(firstName: string, lastName: string, email: string, password: string): void {
    const send = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    if (this.validate(firstName, lastName, email, password)) {
      this.userService.create(send).then((user) => {
        this.login(email, password);
      });
    }
  }
  login(email: string, password: string): void {
    const send = {
      email: email,
      password: password
    };
    this.userService.login(send).then((response) => {
      localStorage.setItem('userId', response.userId);
      this.router.navigate(['']);
    });
  }
}
