import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})

export class LoginComponent {
  constructor(
    private router: Router
  ) { }
  login(): void {
    this.router.navigate(['/complaints']);
  }
}
