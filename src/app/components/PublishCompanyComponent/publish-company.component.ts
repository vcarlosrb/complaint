import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../classes/company.class';
import { User } from '../../classes/user.class';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'publish-company-component',
  templateUrl: './publish-company.component.html',
  styleUrls: ['./publish-company.component.scss'],
  providers: [PublishService]
})
export class PublishCompanyComponent implements OnInit {
  InputStatement: string;
  @Input() company: Company;
  @Input() user: User;
  @Output() publish = new EventEmitter();
  valid: { statement: boolean };
  constructor(
    private publishService: PublishService
  ) {
    this.valid = {
      statement: false
    };
  }
  ngOnInit() { }
  validate(statement: string): boolean {
    this.valid.statement = (statement === undefined || statement === '');

    return (!this.valid.statement);
  }
  sendPublish(statement: string): void {
    if (this.validate(statement)) {
      const send = {
        companyId: this.company.id,
        statement: statement,
        userId: localStorage.getItem('userId')
      };
      this.publishService.create(send).then((response) => {
        response.user = this.user;
        response.company = this.company;
        this.publish.emit(response);
        this.InputStatement = '';
      });
    }
  }
}
