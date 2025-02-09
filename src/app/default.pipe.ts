import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string): string {
    let s = value.split ('')
    s[0] = s[0].toLocaleUpperCase ()
    const st = s.join ('')
    return st
  }

}
