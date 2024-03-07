export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._code = code;
    }
    if (typeof name === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._code = newCode;
    }
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = newName;
    }
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
