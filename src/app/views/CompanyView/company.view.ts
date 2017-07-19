import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../classes/user.class';
import { Company } from '../../classes/company.class';
import { Publish } from '../../classes/publish.class';
import { CompanyService } from '../../services/CompanyService/company.service';

@Component({
  selector: 'company-view',
  templateUrl: './company.view.html',
  styleUrls: ['./company.view.scss'],
  providers: [CompanyService]
})
export class CompanyView implements OnInit {
  company: Company;
  user: User;
  publications: Publish[];
  constructor(
    private router: ActivatedRoute,
    private companyService: CompanyService
  ) { }
  ngOnInit() {
    this.company = this.router.snapshot.data['CurrentCompany'];
    this.user = this.router.parent.snapshot.data['UserData'];
    this.companyService.getPublishes(this.company.id).then((response) => {
      response.map((publish) => {
        publish.company = this.company;
      });
      this.publications = response.reverse();
    });
  }
  newPublish(publish: Publish): void {
    this.publications.unshift(publish);
  }
}
