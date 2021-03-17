class Square {
    private isMine = false
    private adjacentMineCounts = 0
    public value(): string {
        if (this.isMine) {
            return "*"
        } else {
            return this.adjacentMineCounts === 0 ? " " : String(this.adjacentMineCounts)
        }
    }
    public setMine(): void {
        this.isMine = true
    }
    public addAdjacentMineCounts(): void {
        this.adjacentMineCounts++
    }
}

type Coordinate = {
    x: number,
    y: number
}

export default class Minesweeper {
    public annotate(input: string[]): string[] {
        if (input.length === 0) {
            return []
        } else if (input[0].length === 0) {
            return ['']
        }

        const colsCount = input[0].length
        const rowsCount = input.length
        const squares = [...Array(rowsCount)].map(() => [...Array(colsCount)].map(() => new Square()))

        input.map((row: string, y: number) => {
            row.split('').map((value: string, x: number) => {
                if (value === "*") {
                    squares[y][x].setMine()
                    for (const adjacent of Minesweeper.adjacentList(x, y, colsCount, rowsCount)) {
                        squares[adjacent.y][adjacent.x].addAdjacentMineCounts()
                    }
                }
            })
        })

        const ret = new Array<string>()
        for (const squareRow of squares) {
            ret.push(
                squareRow.reduce((acc, s) => acc.concat(s.value()), "")
            )
        }
        return ret
    }

    private static adjacentList(x: number, y: number, colsCount: number, rowsCount: number) : Coordinate[] {
        const ret = new Array<Coordinate>()
        const diffs = [[-1,-1], [0,-1],[1,-1],[-1,0], [1,0], [-1,1], [0,1],[1,1]]
        let dx, dy: number
        for (const diff of diffs) {
            dx = x + diff[0]
            dy = y + diff[1]
            if (0 <= dx && dx < colsCount
                && 0 <= dy && dy < rowsCount) {
                ret.push({x: dx, y: dy})
            }
        }
        return ret
    }
}