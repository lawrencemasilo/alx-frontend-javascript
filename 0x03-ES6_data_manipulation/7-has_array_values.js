export default function hasValuesFromArray(set, searchArray) {
  if (!Set.isSet(set) || !Array.isArray(searchArray)) {
    return false;
  }
  for (const element in searchArray) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
