import {Component, Input} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';
import {NavigationService} from 'src/app/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  @Input()
  plugin: Plugin;

  constructor(private navigationService: NavigationService) {
  }

  pluginId() {
    return 'plugin';
  }

  isPluginActive() {
    return this.navigationService.activeSection === this.pluginId();
  }

  elementId(elementIndex: number) {
    return 'element-' + elementIndex;
  }

  isElementActive(elementIndex: number) {
    return this.navigationService.activeSection === this.elementId(elementIndex);
  }

  propertyId(elementIndex: number, propertyIndex: number) {
    return 'element-' + elementIndex + '-prop-' + propertyIndex;
  }

  isPropertyActive(elementIndex: number, propertyIndex: number) {
    return this.navigationService.activeSection === this.propertyId(elementIndex, propertyIndex);
  }

  padId(elementIndex: number, pad: string) {
    return 'element-' + elementIndex + '-pad-' + pad;
  }

  isPadActive(elementIndex: number, pad: string) {
    return this.navigationService.activeSection === this.padId(elementIndex, pad);
  }
}
