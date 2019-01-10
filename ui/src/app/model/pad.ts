export class Pad {
  mediaType: string;
  caps: string;

  constructor(pad?: Pad) {
    if (pad) {
      this.mediaType = pad.mediaType;
      this.caps = pad.caps;
    }
  }
}
