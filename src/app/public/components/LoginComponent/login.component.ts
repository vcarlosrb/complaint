import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';
import { MessageService } from '../../services/UserService/message.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, MessageService]
})

export class LoginComponent {
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }
  login(email: string, password: string): void {
    this.messageService.sendMessage('sfdsf dsf sdfsdf');
    // let send = {
    //   email: email,
    //   password: password
    // };
    // this.userService.login(send).then((response) => {
    //   localStorage.setItem('userId', response.userId);
    //   this.router.navigate(['/complaints']);
    // });
  }
}
