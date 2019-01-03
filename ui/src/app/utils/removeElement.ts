/**
 * Removes the first found element from the list. Modifies the original array!
 * @returns The resulting (original) array
 */
export function removeElement<T>(array: T[], element: T): T[] {
  const idx = array.indexOf(element);
  if (idx > -1) {
    array.splice(idx, 1);
  }
  return array;
}
