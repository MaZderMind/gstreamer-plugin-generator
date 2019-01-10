import {Component, Input} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';
import {NavigationService} from 'src/app/navigation/navigation.service';

@Component({
  selector: 'app-pad-form',
  templateUrl: './pad-form.component.html',
  styleUrls: ['./pad-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
})
export class PadFormComponent {

  @Input()
  index: number;

  @Input()
  element: Element;

  @Input()
  pad: string;

  constructor(private navigationService: NavigationService) {
  }

  enterPad() {
    this.navigationService.enter(this.padId());
  }

  padId() {
    return 'element-' + this.index + '-pad-' + this.pad;
  }
}
