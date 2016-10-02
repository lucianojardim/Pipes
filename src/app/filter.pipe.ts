import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //forces rendering of the output again in the html, expensive proposition
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0){
      return value;
    }
    let resultArray = [];
    for(let item of value){
      if(item.match('^.*' + args + '.*$')){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
