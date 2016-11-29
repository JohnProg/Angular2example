import {
    Component,
    OnInit,
    ViewEncapsulation,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ExampleService } from './example.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/my-modal-content.component';
import { Observable, Subject } from 'rxjs/Rx';
import IProduct = Example.Models.IProduct;

@Component({
    selector: 'my-example-list',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']

})
export class ExampleComponent implements OnInit {
    products: Example.Models.IProduct[];
    selectedProduct: any;
    closeResult: string;
    constructor(private exampleService: ExampleService,
        private modalService: NgbModal) {
        // Do stuff
        console.log("hiii");
    }

    ngOnInit() {
       let self = this;
       //this.products= this.exampleService.getListProducts();
       this.exampleService.getListProducts()
       .subscribe(result=>{
           self.products=result;
       }, error=>{
           console.log(error);
       });
    }
    goDetails(selectedProduct: any) {
        console.debug("details", selectedProduct);
        this.selectedProduct = selectedProduct;
        this.open();
        
    }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        console.log(this.selectedProduct);
        modalRef.componentInstance.modalObject = this.selectedProduct;
    }


}
