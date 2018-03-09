class SmartCalculator {
  constructor(initialValue) {
    this._currentValue = initialValue;
  }

  add(number) {
    this._currentValue += ' + ' + number;
    return this;
  }

  subtract(number) {
    this._currentValue += ' - ' + number;
    return this;
  }

  multiply(number) {
    this._currentValue += ' * ' + number;
    return this;
  }

  devide(number) {
    this._currentValue += ' / ' + number;
    return this;
  }

  pow(number) {
    this._currentValue += ' ** ' + number;
    return this;
  }

  valueOf() {
    return eval( this._currentValue );
  }
}

module.exports = SmartCalculator;
