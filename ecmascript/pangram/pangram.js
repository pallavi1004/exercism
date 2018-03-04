
export default class Pangram {
  constructor(sentence) {
    this._sentence = sentence;
  }

  isPangram() {
    let used = new Map();
    [...this._sentence].map((ch) => {
      const normalized = this._normalizeCharactor(ch);
      if (normalized !== null) {
        used.set(normalized, true);
      }
    });
    return used.size === 26;
  }

  _normalizeCharactor(ch) {
    ch = ch.toLowerCase();
    if (ch.match(/[a-z]/)) {
      return ch;
    } else {
      return null;
    }
  }
}