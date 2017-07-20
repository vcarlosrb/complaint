import { Component, Input, OnInit } from '@angular/core';
import { Publish } from '../../classes/publish.class';
import { User } from '../../classes/user.class';
import { Comment } from '../../classes/comment.class';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'publish-item-component',
  templateUrl: './publish-item.component.html',
  styleUrls: ['./publish-item.component.scss'],
  providers: [PublishService]
})
export class PublishItemComponent implements OnInit {
  @Input() publish: Publish;
  @Input() user: User;
  likeUser: boolean;
  commentActive: boolean;
  comments: Comment[];
  constructor(
    private publishService: PublishService
  ) {
    this.commentActive = false;
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
  getComments(): void {
    if (!this.commentActive) {
      this.publishService.getComments(this.publish.id).then((response) => {
        this.comments = response;
        this.commentActive = true;
      });
    }
  }
}
