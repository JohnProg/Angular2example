
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example/example.service';
import IProduct = Example.Models.IProduct;

@Component({
  selector: 'route-item-example',
  templateUrl: 'route-item-example.component.html'
})
export class RouteItemComponent implements OnInit {
  product: IProduct;
  private id: any;
  errorMessage: string;
  successMessage: string;

  constructor(
    private exampleService: ExampleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.product) {
        //SNAPSHOT: THE NO-OBSERVABLE ALTERNATIVE
       /* this.id = +this.route.snapshot.params['id'];
         this.getProduct();*/
         // reuse
         this.route
         .params
         .map(params => params['id'])
         .do(id=> this.id=+id)
         .subscribe(id=>this.getProduct());
    }
  }

  private getProduct() {
    this.exampleService.getProduct(this.id)
      .subscribe(character => this.setEditCharacter(character));
  }

  private gotoProducts() {
    let route = ['/products'];
    this.router.navigate(route);
  }
  updateProductItem() {
    this.exampleService.updateProduct(this.id, this.product)
      .subscribe(data => {
          if (data.id) {
              this.successMessage = `The product was updated successfully`;
          } else {
              this.errorMessage = 'Unable to save customer';
          }
      })
  }
  private setEditCharacter(product: IProduct) {
    if (product) {
      this.product = product;
    } else {
      this.gotoProducts();
    }
  }
}
