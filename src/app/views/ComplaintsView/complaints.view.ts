import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../classes/user.class';
import { Company } from '../../classes/company.class';
import { CompanyService } from '../../services/CompanyService/company.service';

@Component({
  selector: 'complaints-view',
  templateUrl: './complaints.view.html',
  styleUrls: ['./complaints.view.scss'],
  providers: [CompanyService]
})
export class ComplaintsView implements OnInit {
  user: User;
  companies: Company[];
  constructor(
    private router: ActivatedRoute,
    private companyService: CompanyService
  ) { }
  ngOnInit() {
    this.user = this.router.snapshot.data['UserData'];
    this.companyService.list().then((response) => {
      this.companies = response;
    });
  }
}
