export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
    if (typeof length === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._length = length;
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = Array.isArray(students) ? students : [];
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(rename) {
    if (typeof rename === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = rename;
    }
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._length = newLength;
    }
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(addStudents) {
    if (Array.isArray(addStudents)) {
      // eslint-disable-next-line no-underscore-dangle
      this._students = addStudents;
    }
  }
}
