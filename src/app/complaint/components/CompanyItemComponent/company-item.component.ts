import { Component, Input } from '@angular/core';

@Component({
  selector: 'company-item-component',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {
  @Input() company: string;
  @Input() publish: number;
}
