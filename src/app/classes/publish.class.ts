import { User } from './user.class';
import { Company } from './company.class';
import { Comment } from './comment.class';

export class Publish {
  id: string;
  statement: string;
  image: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
  userId: string;
  user: User;
  companyId: string;
  company: Company;
}
