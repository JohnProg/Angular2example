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
    products: Observable<Example.Models.IProduct[]>;
    selectedProduct: any;
    constructor(private exampleService: ExampleService) {
        // Do stuff
    }

    ngOnInit() {
       let self = this;
       this.products= this.exampleService.getListProducts();
    }
    goDetails(selectedProduct: any) {
        
    }


}
