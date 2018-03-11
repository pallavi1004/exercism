export default class PrimeFactors {
  for(number) {
    let factors = [];
    let div = 2;
    while (number != 1) {
      if (number % div === 0 && this._isPrimeNumber(div)) {
        factors.push(div);
        number /= div;
        continue;
      }
      div++;
    }
    return factors;
  }

  _isPrimeNumber(number) {
    for (let current = 2; current < number; current++) {
      if (number % current === 0) return false;
    }
    return true;
  }
}