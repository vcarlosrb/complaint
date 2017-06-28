import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})

export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  register(firstName: string, lastName: string, email: string, password: string): void {
    let send = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    this.userService.create(send).then((user) => {
      this.login(email, password);
    });
  }
  login(email: string, password: string): void {
    let send = {
      email: email,
      password: password
    };
    this.userService.login(send).then((response) => {
      //localStorage.setItem('userId', response.userId);
      this.router.navigate(['/complaints']);
    });
  }
}
