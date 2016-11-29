import {Component, OnInit,ViewEncapsulation,} from '@angular/core';
import { ExampleService } from '../example/example.service';
import { Observable, Subject } from 'rxjs/Rx';
import IProduct = Example.Models.IProduct;

@Component({
    selector: 'route-example.component',
    templateUrl: './route-example.component.html',
    styleUrls: ['./route-example.component.scss']

})
export class RouteExampleComponent implements OnInit {
    products: Example.Models.IProduct[];
    selectedProduct: any;
    constructor(private exampleService: ExampleService) {
        // Do stuff
    }

    ngOnInit() {
       this.exampleService.getListProducts()
            .subscribe((data: IProduct[]) => this.products = data);
    }
    goDetails(selectedProduct: any) {

    }
    public deleteProductItem(productItem: IProduct) {
      if (confirm('Are you sure you want to delete user ' + productItem.name)) {
        this.exampleService.deleteProduct(productItem.id)
           .subscribe(
             response => {
                 this.products.forEach((u: IProduct, i: number) => {
                  if (u.id === productItem.id) {
                    this.products.splice(i, 1);
                  }
                });
             }, error => {
                 console.log(error);
             }, () => {
                 console.log('Deleted complete');
             }
           );
       }
   }


}
