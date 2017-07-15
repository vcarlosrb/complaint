import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';
import { UtilService } from '../../services/UtilService/util.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, UtilService]
})

export class LoginComponent {
  valid: { email: boolean, password: boolean };
  constructor(
    private userService: UserService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.valid = {
      email: false,
      password: false
    };
  }
  validate(email: string, password: string): boolean {
    this.valid.email = (email === undefined || email === '');
    if (!this.valid.email) {
      this.valid.email = !this.utilService.validEmail(email);
    }
    this.valid.password = (password === undefined || password === '');

    return (!this.valid.email && !this.valid.password);
  }
  login(email: string, password: string): void {
    const send = {
      email: email,
      password: password
    };
    if (this.validate(email, password)) {
      this.userService.login(send).then((response) => {
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('id_token', response.id);
        this.router.navigate(['']);
      });
    }
  }
}
