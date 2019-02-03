import {Component, OnInit, ViewChild} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';
import {GenerateZipService} from 'src/app/service/generate-zip.service';
import {StoreService} from 'src/app/service/store.service';
import {PluginFormComponent} from 'src/app/plugin-form/plugin-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  plugin: Plugin;

  @ViewChild('pluginFormComponent')
  pluginFormComponent: PluginFormComponent;

  constructor(
    private generateZipService: GenerateZipService,
    private storeService: StoreService
  ) {
  }

  ngOnInit(): void {
    let plugin = this.storeService.load();
    console.log('load', plugin);
    if (!plugin) {
      plugin = new Plugin();
    }

    this.plugin = plugin;
  }

  onGenerateClicked() {
    this.pluginFormComponent.revealControlValidity = true;

    if (this.pluginFormComponent.valid) {
      this.generateZipService.generateZip(this.plugin);
    }
  }

  storeChangedData() {
    this.storeService.store(this.plugin);
  }

  resetForm() {
    this.plugin = new Plugin();
    this.storeChangedData();
  }

  setPluginData(pluginData: Plugin) {
    this.plugin = pluginData;
    this.storeChangedData();
  }
}
