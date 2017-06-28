import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
})

export class HeaderComponent implements OnInit {
  session: boolean;
  subscription: Subscription;
  constructor(
    private userService: UserService
  ) {
    this.session = false;
  }
  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.session = true;
    }
    UserService.initSession('session').subscribe((value) => {
      this.session = value;
    });
  }
}
