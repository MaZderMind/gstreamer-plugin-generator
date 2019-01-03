import {Injectable} from '@angular/core';
import {Plugin} from "src/app/model/plugin";

@Injectable({
  providedIn: 'root'
})
export class GenerateZipService {
  generateZip(plugin: Plugin) {
    let form: HTMLFormElement = document.createElement('form');
    form.action = '/generate';
    form.method = 'POST';

    let json: HTMLTextAreaElement = document.createElement('textarea');
    form.appendChild(json);
    json.name = 'json';
    json.value = JSON.stringify(plugin);

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(form);
    form.submit();
    body.removeChild(form);
  }
}
