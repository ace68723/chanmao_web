import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchPipe',
})
export class SearchPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            return value.filter(function (data: any) {
              // console.log(el);
                return data.tags.name.indexOf(input) > -1;
            })
        }
        return value;
    }
}



