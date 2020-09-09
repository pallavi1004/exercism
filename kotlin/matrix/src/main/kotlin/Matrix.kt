class Matrix(private val matrixAsString: String) {

    private val data: List<List<Int>> = matrixAsString.split("\n").map {
        it.trim().split("[ ]+".toRegex()).map {it.toInt()}
    }

    fun column(colNr: Int): List<Int> {
        return data.map {it[colNr-1]}.toList()
    }

    fun row(rowNr: Int): List<Int> {
        return data[rowNr-1].toList()
    }
}
