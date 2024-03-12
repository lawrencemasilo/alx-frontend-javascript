export default function cleanSet(set, searchString) {
  const result = [];
  for (const element of set) {
    if (element.startsWith(searchString)) {
      result.push(element.substring(searchString.length));
    }
  }
  return result.join('-').length > 0 ? result.join('-') : '';
}
