import {Component, Input, OnInit} from '@angular/core';
import {Property} from 'src/app/model/property';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
})
export class PropertyFormComponent implements OnInit {

  @Input()
  property: Property;

  constructor() {
  }

  ngOnInit() {
  }

}
