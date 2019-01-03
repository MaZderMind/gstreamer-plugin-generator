import {Archetype} from "./archetype";
import {Classification} from "./classification";
import {Property} from "./property";
import {Pad} from "./pad";


export class Element {
  archetype: Archetype = Archetype.fromDescriptor('TRANSFORM');
  classifications: Classification[] = [Classification.fromDescriptor('Filter')];

  name: string;
  longName: string;

  properties: Property[] = [];
  pads: Pad[] = [];

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromDescriptor(element.archetype);
      this.classifications = element.classifications.map(classification =>
        Classification.fromDescriptor(classification));

      this.name = element.name;
      this.longName = element.longName;

    }
  }
}
