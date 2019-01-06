import {Archetype} from './archetype';
import {Classification} from './classification';
import {Property} from './property';
import {Pad} from './pad';


export class Element {
  archetype: Archetype = Archetype.byName('GstBaseTransform');
  classifications: Classification[] = [];

  name: string;
  description: string;

  properties: Property[] = [];
  pads: Pad[] = [];

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromJson(element.archetype);
      this.classifications = element.classifications.map(classification => Classification.fromJson(classification));
      this.description = element.description;

      this.name = element.name;
    }
  }
}
