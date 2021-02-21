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

    public encode(original: string): string {
        return original
            .toLowerCase()
            .replace(/./g, (char) => {
                if (AtbashCipher.ENCODER.has(char)) {
                    return AtbashCipher.ENCODER.get(char)!
                } else {
                    return ''
                }
            })
            .match(/.{1,5}/g)!
            .join(' ')
    }

    public decode(ciphered: string): string {
        return ciphered.replace(/./g, (char) => {
            if (AtbashCipher.DECODER.has(char)) {
                return AtbashCipher.DECODER.get(char)!
            } else {
                return ''
            }
        })
    }
}