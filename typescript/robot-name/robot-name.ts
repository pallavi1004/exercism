function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Robot {

    private static generateNames(): string[] {
        const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
        return letters.flatMap((l1) =>
            letters.flatMap(l2 =>
                [...Array(1000).keys()]
                    .map(n => String(n).padStart(3, '0'))
                    .map(n => l2 + n)
            )
                .map(subsequent => l1 + subsequent)
        )
    }

    private static readonly names: string[] = Robot.generateNames()

    private static generateAvailableNameIndexes(): number[] {
        return Array.from(Robot.names.keys())
    }

    private static availableNameIndexes: number[] = Robot.generateAvailableNameIndexes()

    private static getNameIndex(): number {
        const i = getRandomInt(Robot.availableNameIndexes.length)
        const ret = Robot.availableNameIndexes[i]
        Robot.availableNameIndexes.splice(i, 1)
        return ret
    }


    private nameIndex: number

    constructor() {
        this.nameIndex = Robot.getNameIndex()
    }

    public get name(): string {
        return Robot.names[this.nameIndex]
    }

    public resetName(): void {
        const oldNameIndex = this.nameIndex
        this.nameIndex = Robot.getNameIndex()
        Robot.availableNameIndexes.push(oldNameIndex)
    }

    public static releaseNames(): void {
        Robot.availableNameIndexes = Robot.generateAvailableNameIndexes()
    }
}
