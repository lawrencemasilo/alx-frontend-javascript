import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._floors = floors;
    }
  }

  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
