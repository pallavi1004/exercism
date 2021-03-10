export default class WordCount {
    public count(input: string): Map<string, number> {
       const ret = new Map<string, number>()
        input
            .toLowerCase()
            .match(/[^\s]+/g)!
            .map(m => ret.set(m, (ret.get(m) || 0) + 1))
        return ret
    }
}