import { Component, Input } from '@angular/core';
import { Company } from '../../classes/company.class';

@Component({
  selector: 'companies-component',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  @Input() companies: Company[];
}
