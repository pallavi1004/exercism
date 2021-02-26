export class ArgumentError extends Error {}

export class WordProblem {
    constructor(private readonly _question: string) {}

    public answer(): number {
        let q = this._question
        let ret = 0
        let m
        while (q.length > 0) {
            if ((m = q.match(/^What is (-?\d+)\s*/)) !== null) {
                ret = Number(m[1])
            }
            else if ((m = q.match(/^plus (-?\d+)\s*/)) !== null) {
                ret += Number(m[1])
            }
            else if ((m = q.match(/^minus (-?\d+)\s*/)) !== null) {
                ret -= Number(m[1])
            }
            else if ((m = q.match(/^multiplied by (-?\d+)\s*/)) !== null) {
                ret *= Number(m[1])
            }
            else if ((m = q.match(/^divided by (-?\d+)\s*/)) !== null) {
                ret /= Number(m[1])
            }
            else if ((m = q.match(/^\?$/)) !== null) {
                break
            } else {
                throw new ArgumentError()
            }

            q = q.substr(m[0].length)
        }

        return ret
    }
}

