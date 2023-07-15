import { Pipe, PipeTransform } from '@angular/core';
import { Temple } from './temple.model.js';

@Pipe({
  name: 'templesFilter',
  pure: false
})
export class TemplesFilterPipe implements PipeTransform {
  transform(temples: Temple[], term: string): any {  
    let filteredTemples: Temple[] = [];
    if (term && term.length > 0) {
      filteredTemples = temples.filter(
        (temple:Temple) =>
        temple.name.toLowerCase().includes(term.toLowerCase())
        );
    
      }
      if (filteredTemples.length < 1){
        return temples;
      }
      return filteredTemples;
    
  }

}
