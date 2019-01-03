import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Plugin} from "src/app/model/plugin"
import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {removeElement} from "src/app/utils/removeElement";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnInit {

  @Input()
  plugin: Plugin;

  @ViewChild('pluginForm')
  pluginForm: NgForm;

  licenses: License[] = License.LICENSES;

  revealControlValidity = false;

  ngOnInit() {
  }

  addElement() {
    this.plugin.elements.push(new Element());
  }

  removeElement(element: Element) {
    if (!this.canRemoveElement) {
      return;
    }
    removeElement(this.plugin.elements, element);
  }

  get canRemoveElement(): boolean {
    return this.plugin.elements.length > 1;
  }

  generate() {
    console.log(this.plugin);
  }

  revealInvalidControls() {
    this.revealControlValidity = true;
  }
}
