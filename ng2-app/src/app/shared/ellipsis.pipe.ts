import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myEllipsis'
})
export class EllipsisPipe implements PipeTransform  {
  transform(val:string, args:number):string {
    if (args === undefined) {
      return val;
    }
    if (val.length > args) {
      let myData=val.substring(0, args) + '...';
      console.log(myData);
      return myData;
    } else {
      return val;
    }
  }
}