const aCode = "a".charCodeAt(0);
const zCode = "z".charCodeAt(0);

export default class SimpleCipher {
  constructor(key) {
    this._key = key === undefined ? this._generateKey() : key;
    if (!this._validateKey(this._key)) {
      throw "Bad key";
    }
  }

  get key() {
    return this._key;
  }

  encode(target) {
    return [...target].map((ch, i) => {
      let code = ch.charCodeAt() + this._getKeyOffset(i);
      if (code > zCode) {
        code -= 26;
      }
      return String.fromCharCode(code);
    }).join("");
  }

  decode(target) {
    return [...target].map((ch, i) => {
      let code = ch.charCodeAt() - this._getKeyOffset(i);
      if (code < aCode) {
        code += 26;
      }
      return String.fromCharCode(code);
    }).join("");
  }

  _generateKey() {
    const possible = "abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i = 0; i < 10; i++) {
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return key;
  }

  _validateKey(key) {
    return key.match(/^[a-z]+$/);
  }

  _getKeyOffset(i) {
    return this._key[i % this._key.length].charCodeAt(0) - aCode;
  }


}
