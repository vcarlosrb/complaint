import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/user.class';
import { Comment } from '../../classes/comment.class';
import { Publish } from '../../classes/publish.class';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [PublishService]
})
export class CommentsComponent implements OnInit {
  @Input() user: User;
  @Input() publish: Publish;
  @Input() comments: Comment[];
  InputComment: string;
  constructor(
    private publishService: PublishService
  ) { }

  ngOnInit() { }
  onEnter(statement: string): void {
    if (statement !== '') {
      this.comment(statement);
    }
  }
  comment(statement: string): void {
    const send = {
      statement: statement,
      userId: localStorage.getItem('userId'),
      publishId: this.publish.id
    };
    this.publishService.comment(this.publish.id, send).then((response) => {
      response.user = this.user;
      this.comments.unshift(response);
      this.InputComment = '';
    });
  }
}
