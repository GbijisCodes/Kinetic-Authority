import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 20, completeWords = false, ellipsis = '...'): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    
    if (completeWords) {
      const lastSpace = value.substring(0, limit).lastIndexOf(' ');
      if (lastSpace > 0) {
        limit = lastSpace;
      }
    }
    
    return value.substring(0, limit) + ellipsis;
  }
}
