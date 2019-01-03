import {License} from "./license";
import {Element} from "./element";

export class Plugin {
  name: string;

  author: string;
  authorEmail: string;

  license: License = License.byName('LGPL');
  url: string;

  elements: Element[] = [];

  constructor(plugin?: Plugin) {
    if (plugin) {
      this.name = plugin.name;

      this.author = plugin.author;
      this.authorEmail = plugin.authorEmail;

      this.license = plugin.license;
      this.url = plugin.url;
      this.elements = plugin.elements.map(element => new Element(element));
    }
  }
}
