import { Pipe, PipeTransform } from '@angular/core';
import { ExampleService } from '../example/example.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe  implements PipeTransform{

private messageBundle:any;
private request:any;
    
    constructor(private productService: ExampleService){
        this.productService = productService;
        this.messageBundle = {};
    }
    
    transform(value:string, args:string[]):any {
        if(!this.request){
            this.request = this.productService.getTranslate()
            .subscribe(
                data => this.messageBundle = data
             );
        }
        
        return this.messageBundle[value];
    }
}
