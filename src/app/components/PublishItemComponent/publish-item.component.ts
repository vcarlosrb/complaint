import { Component, Input } from '@angular/core';
import { Publish } from '../../classes/publish.class';

@Component({
  selector: 'publish-item-component',
  templateUrl: './publish-item.component.html',
  styleUrls: ['./publish-item.component.scss']
})
export class PublishItemComponent {
  @Input() publish: Publish;
}
