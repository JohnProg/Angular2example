import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() eventEdit = new EventEmitter();

  viewDetail(){
      this.eventEdit.emit(this.product);
  }
}
