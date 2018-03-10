export default class Binary {
  constructor(binary) {
    this._binary = binary;
  }

  toDecimal() {
    if (!this._isValid()) {
      return 0;
    }

    return [...this._binary]
      .reverse()
      .map((value, index) => 2**index * parseInt(value) )
      .reduce((sum, num) => sum + num, 0);
  }

  _isValid() {
    return this._binary.match(/^[01]+$/);
  }
}