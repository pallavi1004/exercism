const yearDaysRates = new Map([
  ["earth", 1],
  ["mercury", 0.2408467],
  ["venus",  0.61519726],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132]
]);

export default class SpaceAge {
  constructor(age) {
    this._seconds = age;
  }

  get seconds() {
    return this._seconds;
  }

  onEarth() {
    return this._calcAge(yearDaysRates.get("earth"));
  }

  onMercury() {
    return this._calcAge(yearDaysRates.get("mercury"));
  }

  onVenus() {
    return this._calcAge(yearDaysRates.get("venus"));
  }

  onMars() {
    return this._calcAge(yearDaysRates.get("mars"));
  }

  onJupiter() {
    return this._calcAge(yearDaysRates.get("jupiter"));
  }

  onUranus() {
    return this._calcAge(yearDaysRates.get("uranus"));
  }

  onNeptune() {
    return this._calcAge(yearDaysRates.get("neptune"));
  }

  onSaturn() {
    return this._calcAge(yearDaysRates.get("saturn"));
  }

  _days() {
    return this._seconds / (24 * 60 * 60);
  }

  _calcAge(rate) {
    const yearDays = 365.25 * rate;
    return Math.round(this._days() * 100 / yearDays) / 100;
  }
}