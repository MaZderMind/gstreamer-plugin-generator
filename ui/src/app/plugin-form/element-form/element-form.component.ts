import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Element} from 'src/app/model/element';
import {ControlContainer, NgForm, NgModel} from "@angular/forms";
import {Archetype} from "src/app/model/archetype";

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

  archetypes = Archetype.ARCHETYPES;

  constructor() {
  }

  ngOnInit() {
  }
}
