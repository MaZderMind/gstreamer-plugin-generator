import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-reset-form-button',
  templateUrl: './reset-form-button.component.html',
  styleUrls: ['./reset-form-button.component.scss']
})
export class ResetFormButtonComponent {

  @Output()
  reset = new EventEmitter<void>();

  resetForm() {
    this.reset.emit();
  }
}
