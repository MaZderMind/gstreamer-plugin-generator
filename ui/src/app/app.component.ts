import {Component, OnInit} from '@angular/core';
import {Plugin} from "./model/plugin";
import {Element} from "./model/element";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  plugin: Plugin;

  ngOnInit(): void {
    this.plugin = new Plugin();
    this.plugin.elements.push(new Element());
  }
}
