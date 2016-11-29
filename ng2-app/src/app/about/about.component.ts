import { Component, OnInit } from '@angular/core';
import { MyCurrencyPipe} from '../shared/my-currency.pipe';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  balanceAmount:any;
  constructor(private mycurpipe: MyCurrencyPipe) {
    // Do stuff
    this.balanceAmount = this.mycurpipe.transform("1234567.89");
  }

  ngOnInit() {
    console.log('Hello About');
  }
  private changeModel(ev) {
    this.balanceAmount = ev;
  }
}
