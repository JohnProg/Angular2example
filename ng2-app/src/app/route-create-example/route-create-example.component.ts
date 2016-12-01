import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../example/example.service';
import { MyCurrencyPipe} from '../shared/my-currency.pipe';
import IProduct = Example.Models.IProduct;


@Component({
    selector: 'route-create-example',
    templateUrl: 'route-create-example.component.html',
    styleUrls: ['route-create-example.component.scss'],
})
export class RouteCreateComponent implements OnInit {
    addForm: FormGroup;
    product: IProduct;
    errorMessage: string;
    successMessage: string;

    constructor(private exampleService: ExampleService, private formBuilder: FormBuilder) { }

    ngOnInit() {
       this.addForm = this.formBuilder.group({
           name: ['', Validators.required],
           price: ['', Validators.required]
       });
   }

    addProductItem() {
      if (this.addForm.valid) {
          this.exampleService.addProduct(this.addForm.value)
              .subscribe(product => {
                this.successMessage = `The product ${product.name} was created successfully`;
              }, error => this.errorMessage = <any>error);
          this.addForm.reset();
      }
    }

   private changeModel(ev) {
    this.product.price = ev;
  }
}
