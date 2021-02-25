export default class RunLengthEncoding {
    public static encode(input: string): string {
        return input.replace(/(.)\1+/g, m => m.length + m[0])
    }

    public static decode(input: string): string {
        return input.replace(/(\d+)(.)/g, (_: string, count: string, char: string) => {
            return char.repeat(Number(count))
        })
    }
}