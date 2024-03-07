import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._amount = amount;
    }
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._amount = newAmount;
    }
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(newCurrency) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = this.currency;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    // eslint-disable-next-line no-underscore-dangle
    return amount * conversionRate;
  }
}
