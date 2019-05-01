import java.util.function.Predicate;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class PangramChecker {

    public boolean isPangram(String input) {
        String lowerInput = input.toLowerCase();
        Predicate<Character> isContain = c -> lowerInput.indexOf(c) != -1;

        return alphabet().allMatch(isContain);
    }

    private Stream<Character> alphabet()
    {
        return IntStream.rangeClosed('a', 'z').mapToObj(i -> (char)i);
    }

}
