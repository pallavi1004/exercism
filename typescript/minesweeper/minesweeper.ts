class Square {
    private isMine = false
    private adjacentMineCounts = 0
    public toString(): string {
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

        return squares.map((squareRow) => squareRow.join(''))
    }

    private static adjacentList(x: number, y: number, colsCount: number, rowsCount: number) : Coordinate[] {
        const ret = new Array<Coordinate>()
        let targetX, targetY: number
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                targetY = y + dy
                targetX = x + dx
                if (0 <= targetX && targetX < colsCount
                    && 0 <= targetY && targetY < rowsCount) {
                    ret.push({x: targetX, y: targetY})
                }
            }
        }
        return ret
    }
}