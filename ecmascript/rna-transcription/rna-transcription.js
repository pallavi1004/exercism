class RnaTranscription {
  toRna(input) {
    const map = new Map([['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);
    let ret = "";
    for (let c of input) {
      if (!map.has(c)) {
        throw 'Invalid input DNA.';
      }
      ret += map.get(c);
    }
    return ret;
  }
}

export default RnaTranscription