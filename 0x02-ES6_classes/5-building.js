export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._sqft = sqft;
    }
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    const temp = this._sqft;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
