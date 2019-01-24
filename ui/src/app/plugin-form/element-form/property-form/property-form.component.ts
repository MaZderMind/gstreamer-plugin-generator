import {Component, Input, OnInit} from '@angular/core';
import {Property} from 'src/app/model/property';
import {ControlContainer, NgForm} from '@angular/forms';
import {PropertyType} from 'src/app/model/property-type';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
})
export class PropertyFormComponent implements OnInit {

  @Input()
  property: Property;

  @Input()
  properties: Property[];

  readonly types = PropertyType.PROPERTY_TYPES;

  constructor() {
  }

  ngOnInit() {
  }

}
