import {Archetype} from 'src/app/model/archetype';
import {Property} from 'src/app/model/property';
import {NameAware} from 'src/app/validator/name-aware';


export class Element implements NameAware {
  archetype: Archetype = Archetype.byName('GstBaseTransform');
  classifications: string[] = [];

  name = '';
  description = '';

  properties: Property[] = [];
  signals: string[] = [];
  mediatype = 'OTHER';

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromJson(element.archetype);
      this.classifications = element.classifications ? element.classifications : [];

      this.name = element.name;
      this.description = element.description;

      this.properties = element.properties ? element.properties.map(property => new Property(property)) : [];
      this.signals = element.signals;
      this.mediatype = element.mediatype;
    }
  }

  getName(): string {
    return this.name;
  }
}
