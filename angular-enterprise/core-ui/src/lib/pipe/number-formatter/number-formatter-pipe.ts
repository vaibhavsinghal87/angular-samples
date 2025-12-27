import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter',
  standalone: true,
})
export class NumberFormatterPipe implements PipeTransform {
  decimalPipe = new DecimalPipe('en-US');

  /**
   *
   * @param value
   * @returns
   */
  transform(value: any): string {
    return this.decimalPipe.transform(value, '1.0-2') ?? '';
  }
}
