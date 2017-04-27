import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchPipe',
})
export class SearchPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            return value.filter(function (data: any) {
              if (data){
                return data.name.indexOf(input) > -1;
              }
            })
        }
        return value;
    }
}



