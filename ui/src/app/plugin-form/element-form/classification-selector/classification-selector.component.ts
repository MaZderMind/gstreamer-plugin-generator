import {Component, Input, OnInit} from '@angular/core';
import {Classification} from 'src/app/model/classification';

import {Element} from 'src/app/model/element';

@Component({
  selector: 'app-classification-selector',
  templateUrl: './classification-selector.component.html',
  styleUrls: ['./classification-selector.component.scss']
})
export class ClassificationSelectorComponent implements OnInit {

  @Input()
  element: Element;

  classifications = Classification.CLASSIFICATIONS;

  constructor() {
  }

  ngOnInit() {
  }
}
