import {Pipe, PipeTransform} from '@angular/core';
import {GlobalId} from 'src/app/utils/id-pipe/global-id';

@Pipe({name: 'lastId'})
export class LastIdPipe implements PipeTransform {
  transform(prefix: string): string {
    return prefix + '-' + GlobalId.current();
  }
}
