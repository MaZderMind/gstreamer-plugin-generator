import {Component, Input, OnDestroy} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

declare interface ErrorItem {
  path: string[];
  element: string;
  message: string;
}

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.scss']
})
export class FormErrorDisplayComponent implements OnDestroy {
  private static readonly ERROR_DESCRIPTIONS = {
    required: 'Field is required',
    uniqueItems: 'The list cannot contain duplicates',
    uniqueName: 'The name must be unique',
  };

  errors: ErrorItem[];

  private subscription: Subscription;

  @Input()
  set form(form: NgForm) {
    this.updateErrorList(form);

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = form.statusChanges.subscribe(() => this.updateErrorList(form));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateErrorList(form: NgForm) {
    this.errors = this.extractErrors(form.control);
  }

  private extractErrors(formgroup: FormGroup, formPath = []): ErrorItem[] {
    let errors: ErrorItem[] = [];

    Object.keys(formgroup.controls).forEach(controlName => {
      const control = formgroup.controls[controlName];

      if (control.errors) {
        errors = errors.concat(...this.formatErrors(formPath, controlName, control.errors));
      }

      if (control instanceof FormGroup && control.controls) {
        formPath.push(controlName);

        errors = errors.concat(this.extractErrors(control, formPath));
        formPath.pop();
      }
    });

    return errors;
  }

  private formatErrors(formPath: string[], controlName: string, errors: { [p: string]: string }): ErrorItem[] {
    return Object.keys(errors).map(key => ({
      path: formPath.slice(),
      element: controlName,
      message: this.describeError(key),
    }));
  }

  private describeError(erroKey: string) {
    return FormErrorDisplayComponent.ERROR_DESCRIPTIONS.hasOwnProperty(erroKey) ?
      FormErrorDisplayComponent.ERROR_DESCRIPTIONS[erroKey] : erroKey;
  }

  get hasErrors(): boolean {
    return this.errors && this.errors.length > 0;
  }
}
