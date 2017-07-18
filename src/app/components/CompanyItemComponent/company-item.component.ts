import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../classes/company.class';

@Component({
  selector: 'company-item-component',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Input() publish: number;
  ngOnInit() { }
}
