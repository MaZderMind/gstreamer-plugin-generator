import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pad-form',
  templateUrl: './pad-form.component.html',
  styleUrls: ['./pad-form.component.scss'],
})
export class PadFormComponent {

  @Input()
  direction: string;

}
