import {Component, Input, OnInit} from '@angular/core';
import {Plugin} from "src/app/model/plugin"
import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {removeElement} from "src/app/utils/removeElement";

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnInit {

  @Input()
  plugin: Plugin;

  licenses: License[] = License.LICENSES;

  ngOnInit() {
  }

  addElement() {
    this.plugin.elements.push(new Element());
  }

  removeElement(element: Element) {
    removeElement(this.plugin.elements, element);
  }
}
