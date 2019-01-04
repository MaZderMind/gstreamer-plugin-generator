import {Plugin} from "src/app/model/plugin";

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private static readonly STORE_KEY = "plugin";

  constructor() {
  }

  store(plugin: Plugin) {
    localStorage.setItem(StoreService.STORE_KEY, JSON.stringify(plugin))
  }

  load(): Plugin {
    try {
      let jsonString = localStorage.getItem(StoreService.STORE_KEY);
      console.log('jsonString ', jsonString);

      let json = JSON.parse(jsonString);

      return new Plugin(json);
    } catch (e) {
      console.error('catched error during deserialization og stored plugin-data', e);
      return null;
    }
  }
}