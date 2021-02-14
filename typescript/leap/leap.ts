function isLeapYear(n: number) {
  if (n % 4 == 0) {
      return !(n % 100 == 0 && n % 400 != 0);
  } else {
      return false
  }
}

export default isLeapYear
