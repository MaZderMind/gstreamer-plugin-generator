export class GlobalId {
  private static CURRENT_ID = 0;

  static next(): number {
    return ++GlobalId.CURRENT_ID;
  }

  static current(): number {
    return GlobalId.CURRENT_ID;
  }
}
