object Luhn {

    fun isValid(candidate: String): Boolean {
        val trimmed = candidate.trim().replace(" ", "")
        if (trimmed.length <=1 || !trimmed.matches("\\d+".toRegex())) {
            return false
        }

        val ints = trimmed.toCharArray().map {Character.getNumericValue(it)}
        println(ints.joinToString(" "))
        val hoge = ints.reversed().mapIndexed { index, it ->
            if (index % 2 == 1) {
                val doubled = it * 2
                if (doubled >= 10) doubled - 9 else doubled
            } else {
                it
            }
        }

        return hoge.sum() % 10 == 0
    }
}
