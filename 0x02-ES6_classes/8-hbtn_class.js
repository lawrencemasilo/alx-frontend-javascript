export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._size = size;
    }
    if (typeof location === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._location = location;
    }
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}
