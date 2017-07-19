import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../classes/user.class';
import { Publish } from '../../classes/publish.class';
import { Company } from '../../classes/company.class';
import { CompanyService } from '../../services/CompanyService/company.service';
import { PublishService } from '../../services/PublishService/publish.service';

@Component({
  selector: 'complaints-view',
  templateUrl: './complaints.view.html',
  styleUrls: ['./complaints.view.scss'],
  providers: [CompanyService, PublishService]
})
export class ComplaintsView implements OnInit {
  user: User;
  companies: Company[];
  publications: Publish[];
  constructor(
    private router: ActivatedRoute,
    private companyService: CompanyService,
    private publishService: PublishService
  ) { }
  ngOnInit() {
    this.user = this.router.snapshot.data['UserData'];
    this.companyService.list().then((response) => {
      this.companies = response;
    });
    this.publishService.list().then((response) => {
      this.publications = response.reverse();
    });
  }
  newPublish(publish: Publish): void {
    this.companies.map((company) => {
      if (company.id === publish.companyId) {
        company.publishes.push(publish);
      }
    });
    this.publications.unshift(publish);
  }
}
