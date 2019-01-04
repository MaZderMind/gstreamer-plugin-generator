import {Archetype} from "./archetype";
import {Classification} from "./classification";
import {Property} from "./property";
import {Pad} from "./pad";


export class Element {
  archetype: Archetype = Archetype.byName('TRANSFORM');
  classifications: Classification[] = [Classification.byName('Filter')];

  identifier: string;
  name: string;

  properties: Property[] = [];
  pads: Pad[] = [];

  constructor(element?: Element) {
    if (element) {
      this.archetype = Archetype.fromJson(element.archetype);
      this.classifications = element.classifications.map(classification => Classification.fromJson(classification));

      this.identifier = element.identifier;
      this.name = element.name;
    }
  }
}
