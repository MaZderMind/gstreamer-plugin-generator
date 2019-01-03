import {Component, OnInit} from '@angular/core';
import {Plugin} from "./model/plugin";
import {Element} from "./model/element";
import {GenerateZipService} from "src/app/service/generate-zip.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  plugin: Plugin;

  constructor(private generateZipService: GenerateZipService) {
  }

  ngOnInit(): void {
    this.plugin = new Plugin();
    this.plugin.elements.push(new Element());
  }

  generateZip() {
    this.generateZipService.generateZip(this.plugin)
  }
}
