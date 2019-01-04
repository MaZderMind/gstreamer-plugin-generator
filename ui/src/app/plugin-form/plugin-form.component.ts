import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Plugin} from "src/app/model/plugin"
import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {removeElement} from "src/app/utils/removeElement";
import {NgForm, NgModel} from "@angular/forms";
import {generateIdentifier} from "src/app/utils/generate-identifier";

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnInit {

  @Input()
  plugin: Plugin;

  @Output()
  generate = new EventEmitter<Plugin>();

  @ViewChild('pluginForm')
  pluginForm: NgForm;

  @ViewChild('identifier')
  identifier: NgModel;

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

  generateIdentifier() {
    if (this.identifier.control.dirty) {
      return;
    }

    this.plugin.identifier = generateIdentifier(this.plugin.name || '');
    this.identifier.control.markAsTouched();
  }

  revealInvalidControls() {
    this.revealControlValidity = true;
  }

  onGenerateClicked() {
    this.revealInvalidControls();
    if (this.pluginForm.valid) {
      this.triggerDownload()
    }
  }

  private triggerDownload() {
    this.generate.emit(this.plugin);
  }
}
