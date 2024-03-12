export default function getListStudentIds(arr) {
  const newArr = [];

  arr.map((obj) => newArr.append(obj.id));

  return newArr;
}
