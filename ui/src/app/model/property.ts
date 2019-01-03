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
  value = 0;
  name = '';
  description = '';
}

export class Property {
  name = '';
  displayName = '';
  description = '';

  type: PropertyType;

  defaultValue: any;
  min: number;
  max: number;
  enumValues: PropertyEnumItem[] = [];

  readable: boolean;
  writable: boolean;
}
