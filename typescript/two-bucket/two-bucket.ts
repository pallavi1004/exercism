export class Bucket {
    public static One = new Bucket('one')
    public static Two = new Bucket('two')
    constructor(public readonly name: string) {}
}

class State {
    moves: number
    bucketOne: number
    bucketTwo: number
    constructor(_moves: number, _bucketOne: number, _bucketTwo: number) {
        this.moves = _moves
        this.bucketOne = _bucketOne
        this.bucketTwo = _bucketTwo
    }
}

export class TwoBucket {
    private _goalBucket?: Bucket
    private _otherBucket?: number
    constructor(
        private readonly bucketOne: number,
        private readonly bucketTwo: number,
        private readonly goal: number,
        private readonly starterBucket: Bucket) {}

    public moves(): number {
        const pushedState = [...Array(this.bucketOne+1)].map(() => Array(this.bucketTwo+1).fill(false));
        const queue: State[] = []
        if (this.starterBucket === Bucket.One) {
            queue.push(new State(1, this.bucketOne, 0))
            pushedState[this.bucketOne][0] = true
        } else {
            queue.push(new State(1, 0, this.bucketTwo))
            pushedState[0][this.bucketTwo] = true
        }

        while (queue.length > 0) {
            const state = queue.pop()!
            if (state.bucketOne === this.goal) {
                this._goalBucket = Bucket.One
                this._otherBucket = state.bucketTwo
                return state.moves
            } else if (state.bucketTwo === this.goal) {
                this._goalBucket = Bucket.Two
                this._otherBucket = state.bucketOne
                return state.moves
            }

            const oneToTwo = Math.min(state.bucketOne, this.bucketTwo-state.bucketTwo)
            const twoToOne = Math.min(state.bucketTwo, this.bucketOne-state.bucketOne)

            const nextStates = [
                new State(state.moves+1, this.bucketOne, state.bucketTwo),
                new State(state.moves+1, 0, state.bucketTwo),
                new State(state.moves+1, state.bucketOne, this.bucketTwo),
                new State(state.moves+1, state.bucketOne, 0),
                new State(state.moves+1, state.bucketOne-oneToTwo, state.bucketTwo+oneToTwo),
                new State(state.moves+1, state.bucketOne+twoToOne, state.bucketTwo-twoToOne),
            ]

            for (const ns of nextStates) {
                if (!pushedState[ns.bucketOne][ns.bucketTwo]) {
                    pushedState[ns.bucketOne][ns.bucketTwo] = true
                    queue.unshift(ns)
                }
            }
        }

        return -1
    }

    get goalBucket(): string {
        return this._goalBucket!.name
    }

    get otherBucket(): number {
        return this._otherBucket!
    }
}