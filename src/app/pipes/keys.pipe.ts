import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure : false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    // se inica con un arreglo vacio de key para obtener lo datos

    let keys = [];
    // value es el objeto que viene del firebase
    for( let key in value){
      // esto es un arreglo de llaves
      keys.push(key)
    }

    return keys;
  }

}
