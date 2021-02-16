class Matrix {
  rows: number[][] = []
  columns: number[][] = []

  constructor(matrixString: string) {
    matrixString.split("\n").forEach(rowStr => {
      this.rows.push(rowStr.split(" ").map(c => Number(c)))
    })

    for (let c = 0; c < this.rows[0].length; c++) {
      this.columns.push([])
      for (let r = 0; r < this.rows.length; r++) {
        this.columns[c].push(this.rows[r][c])
      }
    }
  }
}

export default Matrix
