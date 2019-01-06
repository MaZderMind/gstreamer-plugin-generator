export enum PropertyType {
  STRING,
  BOOLEAN,
  CHAR,
  INT,
  UINT,
  LONG,
  ULONG,
  INT64,
  UINT64,
  FLOAT,
  DOUBLE,
  ENUM,
  FLAGS,
}

export class PropertyEnumItem {
  value: number;
  name: string;
  description: string;

  constructor(propertyEnumItem?: PropertyEnumItem) {
    if (propertyEnumItem) {
      this.value = propertyEnumItem.value;
      this.name = propertyEnumItem.name;
      this.description = propertyEnumItem.description;
    }
  }
}

export class Property {
  name: string;
  description: string;

  type: PropertyType;

  defaultValue: any;
  min: number;
  max: number;
  enumItems: PropertyEnumItem[] = [];

  readable: boolean;
  writable: boolean;

  constructor(property?: Property) {
    if (property) {
      this.name = property.name;
      this.description = property.description;

      this.type = property.type;

      this.defaultValue = property.defaultValue;
      this.min = property.min;
      this.max = property.max;
      this.enumItems = property.enumItems ? property.enumItems.map(enumItem => new PropertyEnumItem(enumItem)) : [];

      this.readable = property.readable;
      this.writable = property.writable;
    }
  }
}
