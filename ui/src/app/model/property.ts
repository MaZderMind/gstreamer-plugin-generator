import {PropertyType} from 'src/app/model/property-type';
import {NameAware} from 'src/app/validator/name-aware';

export class Property implements NameAware {
  name = '';
  description = '';

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

  getName(): string {
    return this.name;
  }
}
