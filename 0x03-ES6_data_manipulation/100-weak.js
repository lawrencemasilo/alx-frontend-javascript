export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let weakMapCount = weakMap.get(endpoint) || 0;
  weakMapCount += 1;
  weakMap.set(endpoint, weakMapCount);
  if (weakMapCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
