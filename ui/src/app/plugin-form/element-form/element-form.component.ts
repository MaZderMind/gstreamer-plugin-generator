import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Element} from 'src/app/model/element';
import {ControlContainer, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ElementFormComponent implements OnInit {

  @Input()
  element: Element;

  @ViewChild('identifier')
  identifier: NgModel;

  constructor() {
  }

  ngOnInit() {
  }

  generateIdentifier() {
    if (this.identifier.control.dirty) {
      return;
    }

    this.element.identifier = this.generateIdentifierFromName(this.element.name)
    this.identifier.control.markAsTouched();
  }

  private generateIdentifierFromName(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
  }
}
