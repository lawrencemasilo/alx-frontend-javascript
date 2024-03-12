export default function hasValuesFromArray(set, searchArray) {
  for (const element in searchArray) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
