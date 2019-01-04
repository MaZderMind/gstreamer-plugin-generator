import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gst-base-transform-form',
  templateUrl: './gst-base-transform-form.component.html',
  styleUrls: ['./gst-base-transform-form.component.scss']
})
export class GstBaseTransformFormComponent implements OnInit {

  @Input()
  element: Element;

  constructor() {
  }

  ngOnInit() {
  }

}
