export default class PhoneNumber {
    private static CLEAN_TARGET_PATTERN = /[().\s-]/g
    private static VALID_NUMBER_PATTERN = /^1?(\d{10})$/

    constructor(private readonly input: string) {}

    public number(): string | undefined {
        const match = this.input
            .replace(PhoneNumber.CLEAN_TARGET_PATTERN, '')
            .match(PhoneNumber.VALID_NUMBER_PATTERN)

        return match ? match[1] : undefined
    }
}