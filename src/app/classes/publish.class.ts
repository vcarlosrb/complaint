import { User } from './user.class';
import { Company } from './company.class';

export class Publish {
  id: string;
  statement: string;
  image: string;
  likes: string[];
  createdAt: Date;
  userId: string;
  user: User;
  companyId: string;
  company: Company;
}
