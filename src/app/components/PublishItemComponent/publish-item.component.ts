import { Component, Input, OnInit } from '@angular/core';
import { Publish } from '../../classes/publish.class';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'publish-item-component',
  templateUrl: './publish-item.component.html',
  styleUrls: ['./publish-item.component.scss'],
  providers: [PublishService]
})
export class PublishItemComponent implements OnInit {
  @Input() publish: Publish;
  likeUser: boolean;
  constructor(
    private publishService: PublishService
  ) {
    this.likeUser = false;
  }
  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.publish.likes.map((like) => {
      if (like === userId) {
        this.likeUser = true;
      }
    });
  }
  like(): void {
    const userId = localStorage.getItem('userId');
    this.publishService.like(this.publish.id, userId).then((response) => {
      this.likeUser = !this.likeUser;
      this.publish.likes = response;
    });
  }
}
