
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example/example.service';
import IProduct = Example.Models.IProduct;

@Component({
  selector: 'route-item-example',
  templateUrl: 'route-item-example.component.html'
})
export class RouteItemComponent implements OnInit {
  @Input() product: any;

  private id: any;

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

  private setEditCharacter(product: IProduct) {
    if (product) {
      this.product = product;
    } else {
      this.gotoProducts();
    }
  }
}