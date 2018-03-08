export default class Gigasecond {
  constructor(date) {
    this._date = new Date(date.getTime() + 10**12)
  }

  date() {
    return this._date;
  }
}