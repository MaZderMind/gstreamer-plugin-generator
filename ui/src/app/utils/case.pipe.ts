import {Pipe, PipeTransform} from '@angular/core';

export function splitWords(value: string): string[] {
  if (!value) {
    return [];
  }

  return value.replace(/([A-Z0-9]+)/g, '-$1').split(/[^a-zA-Z0-9]/)
    .filter(word => word.length > 0);
}

// 'OneTwo-Three' -> 'onetwothree'
@Pipe({name: 'allLowerCase'})
export class AllLowerCasePipe implements PipeTransform {
  transform(value: string): string {
    return splitWords(value)
      .map(word => word.toLowerCase())
      .join('');
  }
}

// 'OneTwo-Three' -> 'ONE_TWO_THREE'
@Pipe({name: 'upperSnakeCase'})
export class UpperSnakeCasePipe implements PipeTransform {
  transform(value: string): string {
    return splitWords(value)
      .map(word => word.toUpperCase())
      .join('_');
  }
}

// 'OneTwo-Three' -> 'OneTwoThree'
@Pipe({name: 'pascalCase'})
export class PascalCasePipe implements PipeTransform {
  transform(value: string): string {
    return splitWords(value)
      .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join('');
  }
}
