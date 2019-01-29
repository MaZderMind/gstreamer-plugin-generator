import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, DoCheck, Input} from '@angular/core';
import {NameAware} from 'src/app/validator/name-aware';

@Directive({
  selector: '[appUniqueName][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UniqueNameValidator, multi: true},
  ]
})
export class UniqueNameValidator implements Validator, DoCheck {
  private _onChange: () => void;

  private _namesStringLastChecked: string;

  @Input()
  uniqueInList: NameAware[];

  registerOnValidatorChange(onChange: () => void): void {
    this._onChange = onChange;
  }


  validate(control: AbstractControl): ValidationErrors | null {
    const controlValue = control.value;

    if (this.uniqueInList && controlValue != null) {
      if (this.uniqueInList.filter(nameAware => nameAware.getName() === controlValue).length > 1) {
        return {
          'uniqueName': 'Value is not unique'
        };
      }
    }

    return null;
  }

  ngDoCheck(): void {
    // poor mans differ
    if (!this.uniqueInList || !this._onChange) {
      return;
    }

    const namesString = this.uniqueInList.map(nameAware => nameAware.getName()).join('');
    if (namesString !== this._namesStringLastChecked) {
      setTimeout(() => this._onChange(), 0);
      this._namesStringLastChecked = namesString;
    }
  }
}
