import {Component, OnInit} from '@angular/core';
import {Plugin} from "./model/plugin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  plugin: Plugin;

  ngOnInit(): void {
    this.plugin = new Plugin();
  }
}
