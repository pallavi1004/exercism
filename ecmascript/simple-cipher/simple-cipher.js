class SimpleCipher {
  constructor(key) {
    this.key = key === undefined ? this.generateKey() : key;
    if (!this.validateKey(this.key)) {
      throw "Bad key";
    }
  }
  generateKey() {
    const possible = "abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i = 0; i < 10; i++) {
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return key;
  }
  validateKey(key) {
    return key.match(/^[a-z]+$/);
  }
  getKeyOffset(i) {
    return this.key[i % this.key.length].charCodeAt(0) - 97;
  }
  encode(target) {
    let encoded = "";
    for (let i = 0; i < target.length; i++) {
      let code = target.charCodeAt(i) + this.getKeyOffset(i);
      if (code > 122) {
        code -= 26;
      }
      encoded += String.fromCharCode(code);
    }
    return encoded;
  }
  decode(target) {
    let decoded = "";
    for (let i = 0; i < target.length; i++) {
      let code = target.charCodeAt(i) - this.getKeyOffset(i);
      if (code < 97) {
        code += 26;
      }
      decoded += String.fromCharCode(code);
    }
    return decoded;
  }
}

export default SimpleCipher;