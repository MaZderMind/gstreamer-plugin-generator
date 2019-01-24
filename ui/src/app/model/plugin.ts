import {License} from 'src/app/model/license';
import {Element} from 'src/app/model/element';
import {NameAware} from 'src/app/validator/name-aware';

export class Plugin implements NameAware {
  name = '';
  description = '';

  author = '';
  authorEmail = '';

  license: License = License.byName('LGPL');
  url = '';

  elements: Element[] = [];

  constructor(plugin?: Plugin) {
    if (plugin) {
      this.name = plugin.name;
      this.description = plugin.description;

      this.author = plugin.author;
      this.authorEmail = plugin.authorEmail;

      this.license = License.fromJson(plugin.license);
      this.url = plugin.url;
      this.elements = plugin.elements ? plugin.elements.map(element => new Element(element)) : [];
    }
  }

  addElementIfEmpty() {
    if (this.elements.length === 0) {
      this.elements.push(new Element());
    }
  }

  getName(): string {
    return this.name;
  }
}
