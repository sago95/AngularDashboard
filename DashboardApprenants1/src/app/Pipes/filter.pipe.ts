import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const list = [];
    for (const l of value) {
      if (l['nom_apprenant' && 'prenom_apprenant'] === filterString) {
        list.push(l);
      }
    }
    return list;
  }

}
