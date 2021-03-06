import {AfterContentChecked, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';
import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {removeElement} from 'src/app/utils/removeElement';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss'],
})
export class PluginFormComponent implements AfterContentChecked {

  @Input()
  plugin: Plugin;

  @Output()
  changed = new EventEmitter<Plugin>();

  @ViewChild('pluginForm')
  pluginForm: NgForm;

  @ViewChild('identifier')
  identifier: NgModel;

  licenses: License[] = License.LICENSES;

  revealControlValidity = false;

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

  get valid(): boolean {
    return this.pluginForm.valid;
  }

  // TODO wozu?
  ngAfterContentChecked(): void {
    this.changed.emit(this.plugin);
  }
}
