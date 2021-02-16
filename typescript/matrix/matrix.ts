class Matrix {
  rows: number[][] = []
  columns: number[][] = []

  constructor(matrixString: string) {
    this.rows = matrixString
        .split("\n")
        .map(rowString =>
            rowString
                .split(/\s+/)
                .map(n => Number(n))
        )

    this.columns = this.rows[0]
        .map((_, colIndex) =>
          this.rows.map(row => row[colIndex])
        )
  }
}

export default Matrix
