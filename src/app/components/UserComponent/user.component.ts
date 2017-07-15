import { Component, Input } from '@angular/core';
import { User } from '../../classes/user.class';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
}
