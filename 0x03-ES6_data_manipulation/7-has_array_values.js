export default function hasValuesFromArray(set, searchArray) {
  for (const element of searchArray) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
