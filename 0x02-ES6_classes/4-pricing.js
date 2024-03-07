import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._amount = amount;
    }
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency instanceof Currency ? currency : new Currency();
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
    if (newCurrency instanceof Currency) {
      // eslint-disable-next-line no-underscore-dangle
      this._currency = newCurrency;
    }
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    // eslint-disable-next-line no-underscore-dangle
    return amount * conversionRate;
  }
}
