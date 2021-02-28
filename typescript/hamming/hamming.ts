export default class Hamming {
    public compute(dna1: string, dna2: string): number {
        if (dna1.length !== dna2.length) {
            throw new Error("DNA strands must be of equal length.")
        }

        let distance = 0
        for (let i = 0; i < dna1.length; i ++) {
            if (dna1[i] !== dna2[i]) {
                distance++
            }
        }
        return distance
    }
}