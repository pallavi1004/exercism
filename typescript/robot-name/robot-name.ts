
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

    private static generateNameIndexesStack(): number[] {
        const array = Array.from(Robot.names.keys())
        // shuffle
        for(let i = array.length - 1; i > 0; i--){
            const r = Math.floor(Math.random() * (i + 1));
            const tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
        return array
    }

    private static nameIndexesStack: number[] = Robot.generateNameIndexesStack()

    private static getNameIndex(): number {
        return <number>Robot.nameIndexesStack.shift()
    }


    private nameIndex: number

    constructor() {
        this.nameIndex = Robot.getNameIndex()
    }

    public get name(): string {
        return Robot.names[this.nameIndex]
    }

    public resetName(): void {
        Robot.nameIndexesStack.push(this.nameIndex)
        this.nameIndex = Robot.getNameIndex()
    }

    public static releaseNames(): void {
        Robot.nameIndexesStack = Robot.generateNameIndexesStack()
    }
}
