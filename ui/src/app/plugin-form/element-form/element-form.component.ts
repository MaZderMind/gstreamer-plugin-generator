import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Element} from 'src/app/model/element';
import {ControlContainer, NgForm, NgModel} from '@angular/forms';
import {Archetype} from 'src/app/model/archetype';
import {Property} from 'src/app/model/property';
import {removeElement} from 'src/app/utils/removeElement';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
})
export class ElementFormComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  element: Element;

  @Input()
  elements: Element[];

  @ViewChild('identifier')
  identifier: NgModel;

  archetypes = Archetype.ARCHETYPES;

  ngOnInit() {
  }

  addProperty() {
    this.element.properties.push(new Property());
  }

  removeProperty(property: Property) {
    removeElement(this.element.properties, property);
  }
}
