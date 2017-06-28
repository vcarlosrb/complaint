import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/UserService/user.service';
import { MessageService } from '../../services/UserService/message.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService, MessageService]
})

export class HeaderComponent {
  message: any;
  subscription: Subscription;
  constructor(
    private userService: UserService,
    private messageService: MessageService,
  ) {
    this.subscription = this.messageService.getMessage().subscribe((message) => {
      this.message = message;
      console.log(message, 'dddd')
    }, (err) => {
      console.log(err, 'error');
    });
  }
}
