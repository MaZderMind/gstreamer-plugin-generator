import {Archetype} from './archetype';
import {Property} from './property';


export class Element {
  archetype: Archetype = Archetype.byName('GstBaseTransform');
  classifications: string[] = [];

  name: string;
  description: string;

  properties: Property[] = [];
  pads: {
    src: string,
    sink: string,
  };

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromJson(element.archetype);
      this.classifications = element.classifications ? element.classifications : [];

      this.name = element.name;
      this.description = element.description;

      this.properties = element.properties ? element.properties.map(property => new Property(property)) : [];
      this.pads = {
        src: element.pads.src,
        sink: element.pads.sink,
      };
    }
  }
}
