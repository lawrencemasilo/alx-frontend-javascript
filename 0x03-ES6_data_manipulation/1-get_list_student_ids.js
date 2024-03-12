export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const newArr = [];

    arr.map((obj) => newArr.append(obj.id));

    return newArr;
  }

  return [];
}
