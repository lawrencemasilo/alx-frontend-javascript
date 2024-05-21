// eslint-disable-next-line no-underscore-dangle
const _brand = Symbol('brand');
// eslint-disable-next-line no-underscore-dangle
const _motor = Symbol('motor');
// eslint-disable-next-line no-underscore-dangle
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this[_brand] = brand;
    // eslint-disable-next-line no-underscore-dangle
    this[_motor] = motor;
    // eslint-disable-next-line no-underscore-dangle
    this[_color] = color;
  }

  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_brand];
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_motor];
  }

  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_color];
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this[_brand], this[_motor], this[_color]);
  }
}
