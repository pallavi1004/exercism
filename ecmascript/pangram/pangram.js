
export default class Pangram {
  constructor(sentence) {
    this._sentence = sentence;
  }

  isPangram() {
    const normalized = this._sentence.toLowerCase().replace(/[^a-z]/g, "");
    return new Set([...normalized]).size === 26;
  }
}