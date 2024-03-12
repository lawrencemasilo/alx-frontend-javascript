export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, currentValue) => sum.id + currentValue.id);
  }

  return [];
}
