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
    public goalBucket?: string
    public otherBucket?: number
    constructor(
        private readonly bucketOne: number,
        private readonly bucketTwo: number,
        private readonly goal: number,
        private readonly starterBucket: Bucket) {}

    public moves(): number {
        const pushedState = [...Array(this.bucketOne+1)].map(() => Array(this.bucketTwo+1).fill(false));
        const queue = [this.firstState()]
        pushedState[queue[0].bucketOne][queue[0].bucketTwo] = true

        while (queue.length > 0) {
            const state = queue.pop()!
            const checkedGoal = this.checkGoal(state)
            if (checkedGoal.isGoal) {
                return checkedGoal.moves!
            }

            for (const ns of this.generateStates(state)) {
                if (!pushedState[ns.bucketOne][ns.bucketTwo]) {
                    pushedState[ns.bucketOne][ns.bucketTwo] = true
                    queue.unshift(ns)
                }
            }
        }

        return -1
    }

    private checkGoal(state: State): {isGoal: boolean, moves?: number} {
        if (state.bucketOne === this.goal) {
            this.goalBucket = Bucket.One.name
            this.otherBucket = state.bucketTwo
            return {isGoal: true, moves: state.moves}
        } else if (state.bucketTwo === this.goal) {
            this.goalBucket = Bucket.Two.name
            this.otherBucket = state.bucketOne
            return {isGoal: true, moves: state.moves}
        }
        return {isGoal: false}
    }

    private generateStates(state: State): State[] {
        const oneToTwo = Math.min(state.bucketOne, this.bucketTwo-state.bucketTwo)
        const twoToOne = Math.min(state.bucketTwo, this.bucketOne-state.bucketOne)
        const nextMove = state.moves + 1
        return [
            new State(nextMove, this.bucketOne, state.bucketTwo),
            new State(nextMove, 0, state.bucketTwo),
            new State(nextMove, state.bucketOne, this.bucketTwo),
            new State(nextMove, state.bucketOne, 0),
            new State(nextMove, state.bucketOne-oneToTwo, state.bucketTwo+oneToTwo),
            new State(nextMove, state.bucketOne+twoToOne, state.bucketTwo-twoToOne),
        ]
    }

    private firstState(): State {
        return this.starterBucket === Bucket.One ?
            new State(1, this.bucketOne, 0) : new State(1, 0, this.bucketTwo)
    }
}