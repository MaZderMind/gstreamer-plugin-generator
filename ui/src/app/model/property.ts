import {PropertyType} from 'src/app/model/property-type';

export class Property {
  name: string;
  description: string;

  type: PropertyType;
  enumItems: string[] = [];

  constructor(property?: Property) {
    if (property) {
      this.name = property.name;
      this.description = property.description;

      this.type = property.type ? PropertyType.fromJson(property.type) : PropertyType.byName('STRING');
      this.enumItems = property.enumItems ? property.enumItems : [];
    }
  }
}
