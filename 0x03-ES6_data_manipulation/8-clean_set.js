export default function cleanSet(set, searchString) {
  let result = [];
  for (const element of set) {
    if (element.startsWith(searchString)) {
      result.push(set.substring(searchString.length));
    }
  }
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  result.join('-');
  return result[0].toString();
}
