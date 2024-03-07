export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
    if (typeof code === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._code = code;
    }
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return `[object ${this._code}]`;
  }
}
