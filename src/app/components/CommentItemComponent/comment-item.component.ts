import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../classes/comment.class';

@Component({
  selector: 'comment-item-component',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() { }
}
