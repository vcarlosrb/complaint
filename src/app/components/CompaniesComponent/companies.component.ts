import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../classes/company.class';

@Component({
  selector: 'companies-component',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @Input() companies: Company[];
  searchCompany: string;
  totalPublish: number;
  constructor() { }
  ngOnInit() {
    this.totalPublish = 0;
    this.companies.map((company) => {
      this.totalPublish = this.totalPublish + company.publishes.length;
    });
  }
}
