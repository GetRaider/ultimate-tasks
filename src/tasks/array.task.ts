export function filter<I>(
  array: I[],
  callback: (iterator: I, index?: number, currentArray?: I[]) => boolean,
): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    const iterator = array[i];
    if (callback(iterator, i, array)) {
      newArray.push(iterator);
    }
  }
  return newArray;
}
