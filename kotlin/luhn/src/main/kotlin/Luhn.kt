object Luhn {

    fun isValid(candidate: String): Boolean {
        val arranged = candidate.filterNot { it.isWhitespace() }
        if (arranged.length <= 1 || !arranged.all { it.isDigit() }) {
            return false
        }

        val ints = arranged
                .toCharArray()
                .map { Character.getNumericValue(it) }
                .reversed().mapIndexed { index, it ->
                    if (index % 2 == 1) {
                        val doubled = it * 2
                        if (doubled >= 10) doubled - 9 else doubled
                    } else {
                        it
                    }
                }

        return ints.sum() % 10 == 0
    }
}
