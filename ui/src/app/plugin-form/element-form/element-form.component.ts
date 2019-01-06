import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Element} from 'src/app/model/element';
import {ControlContainer, NgForm, NgModel} from '@angular/forms';
import {Archetype} from 'src/app/model/archetype';
import {Property} from 'src/app/model/property';
import {removeElement} from 'src/app/utils/removeElement';
import {NavigationService} from 'src/app/navigation/navigation.service';

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

  @ViewChild('identifier')
  identifier: NgModel;

  archetypes = Archetype.ARCHETYPES;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  addProperty() {
    this.element.properties.push(new Property());
  }

  removeProperty(property: Property) {
    removeElement(this.element.properties, property);
  }

  enterElement() {
    this.navigationService.enter(this.elementId());
  }

  elementId() {
    return 'element-' + this.index;
  }

  enterProperty(propertyIndex: number) {
    this.navigationService.enter(this.propertyId(propertyIndex));
  }

  propertyId(propertyIndex: number) {
    return 'element-' + this.index + '-prop-' + propertyIndex;
  }
}
