export default class AtbashCipher {
    private static readonly ENCODER: Map<string, string> = new Map()
    private static readonly DECODER: Map<string, string> = new Map()

    private static _initialize = (() => {
        const original: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const cipher: string[] = 'zyxwvutsrqponmlkjihgfedcba'.split('')
        for (let i = 0; i < original.length; i++) {
            AtbashCipher.ENCODER.set(original[i], cipher[i])
            AtbashCipher.DECODER.set(original[i], cipher[i])
        }
        for (let i = 0; i < 9; i++) {
            AtbashCipher.ENCODER.set(String(i), String(i))
            AtbashCipher.DECODER.set(String(i), String(i))
        }
    })()

    private static encodeReducer(ciphered: string[], char: string): string[] {
        if (AtbashCipher.ENCODER.has(char)) {
            return [...ciphered, AtbashCipher.ENCODER.get(char)!]
        } else {
            return ciphered
        }
    }

    private static decodeReducer(ciphered: string[], char: string): string[] {
        if (AtbashCipher.DECODER.has(char)) {
            return [...ciphered, AtbashCipher.DECODER.get(char)!]
        } else {
            return ciphered
        }
    }

    private static divideByFiveReducer(ciphered: string[], char: string, i: number): string[] {
        return (i != 0 && i % 5 == 0) ? [...ciphered, " ", char] : [...ciphered, char]
    }

    public encode(original: string): string {
        return original
            .toLowerCase()
            .split('')
            .reduce(AtbashCipher.encodeReducer, [])
            .reduce(AtbashCipher.divideByFiveReducer, [])
            .join('')
    }

    public decode(ciphered: string): string {
        return ciphered
            .split('')
            .reduce(AtbashCipher.decodeReducer, [])
            .join('')
    }
}