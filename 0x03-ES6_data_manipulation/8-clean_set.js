export default function cleanSet(set, searchString) {
  const result = [];
  for (const element of set) {
    if (element.startsWith(searchString)) {
      result.push(set.substring(searchString.length));
    }
  }
  result.join('-');
  return result[0].toString();
}
