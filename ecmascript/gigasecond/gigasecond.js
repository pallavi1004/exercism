export default class Gigasecond {
  constructor(date) {
    this._date = new Date(date.getTime() + 1000000000000)
  }

  date() {
    return this._date;
  }
}