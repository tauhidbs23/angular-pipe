import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'inArray' })
export class inArrayPipe implements PipeTransform {

  transform(array: any[], value: any, key?: string): any {
    return array.findIndex(item => {
    
      if (typeof item === 'object' && !key) {
        throw new Error('Value key is required to check if the value exists in array of objects');
      }
      if (typeof item !== 'object') { // If it's a simple array
        console.log("item", item)
        return item === value;
      } else {
        if (key.indexOf('.') > -1) {
          const splitKeys = key.split('.');
          let itemValue;
          splitKeys.forEach((k , i) => {
            if (i === 0) {
              itemValue = item[splitKeys[0]];
            } else if(itemValue && k) {
              itemValue = itemValue[k];
            }
          });
          return itemValue === value;
        } else {
          return item[key] === value;
        }
      }
    }) > -1;
  }
}