import { User } from './user.class';

export class Comment {
  id: string;
  statement: string;
  createdAt: Date;
  userId: string;
  publishId: string;
  user: User;
}
