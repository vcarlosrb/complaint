import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../classes/company.class';
import { User } from '../../classes/user.class';
import { Publish } from '../../classes/publish.class';
import { UtilService } from '../../services/UtilService/util.service';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'publish-component',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss'],
  providers: [UtilService, PublishService]
})
export class PublishComponent {
  @Input() companies: Company[];
  @Input() user: User;
  @Output() publish = new EventEmitter();
  listCompanies: Company[];
  currentCompany: Company;
  InputCompany: string;
  InputStatement: string;
  valid: { company: boolean, statement: boolean };
  constructor(
    private utilService: UtilService,
    private publishService: PublishService
  ) {
    this.valid = {
      company: false,
      statement: false
    };
    this.listCompanies = [];
  }
  keyUp(name: string): void {
    if (name === '') {
      this.listCompanies = [];
    } else {
      this.listCompanies = this.utilService.filterListCompany(name, this.companies);
    }
  }
  selectCompany(company: Company): void {
    this.currentCompany = company;
    this.InputCompany = company.name;
    this.listCompanies = [];
  }
  validate(company: Company, statement: string): boolean {
    this.valid.company = (company === undefined);
    this.valid.statement = (statement === undefined || statement === '');

    return (!this.valid.company && !this.valid.statement);
  }
  sendPublish(company: Company, statement: string): void {
    if (this.validate(company, statement)) {
      const send = {
        companyId: company.id,
        statement: statement,
        userId: localStorage.getItem('userId')
      };
      this.publishService.create(send).then((response) => {
        response.user = this.user;
        response.company = company;
        this.publish.emit(response);
        this.currentCompany = undefined;
        this.InputCompany = '';
        this.InputStatement = '';
      });
    }
  }
}
