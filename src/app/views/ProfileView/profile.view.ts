import { Component } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { User } from '../../classes/user.class';

@Component({
  selector: 'profile-view',
  templateUrl: './profile.view.html',
  styleUrls: ['./profile.view.scss'],
  providers: [UserService]
})
export class ProfileView {
  user: User;
  constructor(
    private userService: UserService
  ) {
    const id = localStorage.getItem('userId');
    this.userService.getById(id).then((response) => {
      this.user = response;
    });
  }

}
