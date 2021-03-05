export  default class Pangram {
    constructor(private readonly str: string) {}
    public isPangram(): boolean {
        const arranged = this.str
            .toLowerCase()
            .replace(/[^a-z]/g, '')

        return new Set(arranged.split('')).size === 26
    }
}