import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../classes/user.class';

@Component({
  selector: 'header-private-component',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss']
})

export class HeaderPrivateComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.user = this.activeRoute.snapshot.data['UserData'];
  }
  goProfile(): void {
    this.router.navigate(['profile']);
  }
  goHome(): void {
    this.router.navigate(['']);
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
