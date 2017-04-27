import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'values'})
export class MapValuesPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if (!value) {
      return value;
    } 
    let values = [];
    for (let key in value) {
      values.push( value[key]);
    } 
    return values;
  } 
}