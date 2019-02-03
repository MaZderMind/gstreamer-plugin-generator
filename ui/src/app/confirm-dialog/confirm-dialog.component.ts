import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {

  @Input()
  title: string;

  @Input()
  positiveAnswer: string;

  @Input()
  negativeAnswer: string;

  @Input()
  closeAfterClick = false;

  @Output()
  positiveButtonClick = new EventEmitter<any>();

  @Output()
  negativeButtonClick = new EventEmitter<any>();

  @Input()
  negativeBtnClass = 'secondary';

  @Input()
  positiveBtnClass = 'primary';

  @Input()
  showPositive = true;

  @Input()
  showNegative = true;

  @Output()
  hidden = new EventEmitter<any>();

  @ViewChild('modal')
  private modal: ModalDirective;

  private reference: any = null;

  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.modal.onHidden.subscribe(() => {
      this.reference = null;

      this.hidden.emit(this.reference);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Dialog anzeigen, dabei `reference` speichern.
   * `reference` wird den Event-Handlern als Argument wieder mit übergeben
   */
  show(reference?: any) {
    this.reference = reference;
    this.modal.show();
  }

  close() {
    this.reference = null;
    this.modal.hide();
  }

  negativeButtonClicked() {
    this.negativeButtonClick.emit(this.reference);

    if (this.closeAfterClick) {
      this.close();
    }
  }

  positiveButtonClicked() {
    this.positiveButtonClick.emit(this.reference);

    if (this.closeAfterClick) {
      this.close();
    }
  }
}
