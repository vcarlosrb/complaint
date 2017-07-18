import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/UserService/user.service';
import { User } from '../../classes/user.class';
import { Publish } from '../../classes/publish.class';

@Component({
  selector: 'profile-view',
  templateUrl: './profile.view.html',
  styleUrls: ['./profile.view.scss'],
  providers: [UserService]
})
export class ProfileView implements OnInit {
  user: User;
  publications: Publish;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) { }
  ngOnInit() {
    this.user = this.router.snapshot.data['CurrentUser'];
    this.userService.getPublishes(this.user.id).then((response) => {
      response.map((publish) => {
        publish.user = this.user;
      });
      this.publications = response;
    });
  }
}
