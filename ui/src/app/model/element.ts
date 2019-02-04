import {Archetype} from 'src/app/model/archetype';
import {Property} from 'src/app/model/property';
import {NameAware} from 'src/app/validator/name-aware';
import {Classification} from 'src/app/model/classification';


export class Element implements NameAware {
  archetype: Archetype = Archetype.byName('GstBaseTransform');
  classifications: Classification[] = [];

  name = '';
  description = '';

  properties: Property[] = [];
  signals: string[] = [];
  mediatype = 'VIDEO';

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromJson(element.archetype);
      this.classifications = element.classifications ?
        element.classifications.map(classification => Classification.fromJson(classification)) : [];

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
