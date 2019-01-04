import {AfterContentChecked, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';
import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {removeElement} from 'src/app/utils/removeElement';
import {NgForm, NgModel} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements AfterContentChecked {

  @Input()
  plugin: Plugin;

  @Output()
  generate = new EventEmitter<Plugin>();

  @Output()
  changed = new EventEmitter<Plugin>();

  @ViewChild('pluginForm')
  pluginForm: NgForm;

  @ViewChild('identifier')
  identifier: NgModel;

  licenses: License[] = License.LICENSES;

  revealControlValidity = false;

  private subscription: Subscription;

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

  revealInvalidControls() {
    this.revealControlValidity = true;
  }

  onGenerateClicked() {
    this.revealInvalidControls();
    if (this.pluginForm.valid) {
      this.triggerDownload();
    }
  }

  private triggerDownload() {
    this.generate.emit(this.plugin);
  }

  ngAfterContentChecked(): void {
    this.changed.emit(this.plugin);
  }
}
