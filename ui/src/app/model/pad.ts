export enum PadDirection {
  SOURCE,
  SINK,
}

export enum PadPresence {
  ALWAYS,
  SOMETIMES,
  REQUEST,
}

export class Pad {
  padname: string;
  direction: PadDirection;
  presence: PadPresence;
  caps: string;
}
