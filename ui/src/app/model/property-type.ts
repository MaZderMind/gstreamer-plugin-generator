export class PropertyType {
  static readonly PROPERTY_TYPES: PropertyType[] = [
    new PropertyType('STRING', false, false),
    new PropertyType('BOOLEAN', false, false),
    new PropertyType('CHAR', false, false),
    new PropertyType('INT', true, false),
    new PropertyType('UINT', true, false),
    new PropertyType('LONG', true, false),
    new PropertyType('ULONG', true, false),
    new PropertyType('INT64', true, false),
    new PropertyType('UINT64', true, false),
    new PropertyType('FLOAT', true, false),
    new PropertyType('DOUBLE', true, false),
    new PropertyType('ENUM', false, true),
    new PropertyType('FLAG', false, true),
  ];

  readonly name: string;
  readonly isNumeric: boolean;
  readonly hasEnumItems: boolean;

  constructor(name: string, isNumeric: boolean, hasEnumItems: boolean) {
    this.name = name;
    this.isNumeric = isNumeric;
    this.hasEnumItems = hasEnumItems;
  }

  static byName(name: string): PropertyType {
    return PropertyType.PROPERTY_TYPES.find(propertyType => propertyType.name === name);
  }

  static fromJson(propertyType: any): PropertyType {
    if (propertyType && propertyType.name) {
      return this.byName(propertyType.name);
    }
    return this.byName(propertyType);
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }
}
