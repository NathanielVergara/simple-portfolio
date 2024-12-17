import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase' // Pipe name used in the template
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';  // return empty string if the value is falsy
    }
    return value.toUpperCase();  // transform the value to uppercase
  }
}
