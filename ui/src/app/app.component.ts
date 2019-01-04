import {Component, OnInit} from '@angular/core';
import {Plugin} from './model/plugin';
import {GenerateZipService} from 'src/app/service/generate-zip.service';
import {StoreService} from 'src/app/service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  plugin: Plugin;

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

    plugin.addElementIfEmpty();

    this.plugin = plugin;
  }

  generateZip() {
    this.generateZipService.generateZip(this.plugin);
  }

  storeChangedData() {
    this.storeService.store(this.plugin);
  }
}
