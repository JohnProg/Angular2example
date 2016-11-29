import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
}
