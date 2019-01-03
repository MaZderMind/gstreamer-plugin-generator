import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  @Output()
  generate = new EventEmitter<Plugin>();

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
