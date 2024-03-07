import Car from './10-car';

// eslint-disable-next-line no-underscore-dangle
const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this[_range] = range;
    }
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new Car(this._brand, this._motor, this._color);
  }
}
