export default class Binary {
  constructor(binary) {
    this._binary = binary;
  }

  toDecimal() {
    if (!this._isValid()) {
      return 0;
    }

    let decimal = 0;
    [...this._binary].reverse().forEach((value, index) => {
      decimal += 2**index * parseInt(value);
    })
    return decimal;
  }

  _isValid() {
    return this._binary.match(/^[01]+$/);
  }
}