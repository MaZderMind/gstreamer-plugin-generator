import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[appUniqueItems][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UniqueItemsValidator, multi: true},
  ]
})
export class UniqueItemsValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!Array.isArray(control.value)) {
      return;
    }

    const strArray: string[] = control.value;
    const lowerArray = strArray.map(item => item.toLowerCase());

    // check if any item has an indexOf that is not equal to it's own position (that would be an earlier duplicate)
    const hasDuplicates = lowerArray.some((search, index) => lowerArray.indexOf(search) !== index);

    console.log('UniqueItemsValidator', strArray, lowerArray, hasDuplicates);
    if (hasDuplicates) {
      return {
        'uniqueItems': 'has Non-Unique items',
      };
    }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
}
