export  default class Series {
    private _digits: number[]
    constructor(input:string) {
        this._digits = input.split('').map(s => Number(s))
    }

    public get digits(): number[] {
        return this._digits.slice()
    }

    public slices(n:number): number[][] {
        if (n > this._digits.length) {
            throw new Error()
        }

        const ret: number[][] = []
        for (let i = 0; i <= (this._digits.length - n); i++) {
            ret.push(this._digits.slice(i, i + n))
        }
        return ret
    }
}