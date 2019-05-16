import java.util.Arrays;
import java.util.HashMap;

class Yacht {

    private int score;

    Yacht(int[] dice, YachtCategory yachtCategory)
    {
        switch (yachtCategory) {
            case ONES:
                score = calcCombinations(dice, 1);
                break;
            case TWOS:
                score = calcCombinations(dice, 2);
                break;
            case THREES:
                score = calcCombinations(dice, 3);
                break;
            case FOURS:
                score = calcCombinations(dice, 4);
                break;
            case FIVES:
                score = calcCombinations(dice, 5);
                break;
            case SIXES:
                score = calcCombinations(dice, 6);
                break;
            case YACHT:
                score = calcYatch(dice);
                break;
            case FULL_HOUSE:
                score = calcFullHouse(dice);
                break;
            case FOUR_OF_A_KIND:
                score = calcFourOfAKind(dice);
                break;
            case LITTLE_STRAIGHT:
                score = calcLittleStraight(dice);
                break;
            case BIG_STRAIGHT:
                score = calcBigStraight(dice);
                break;
            case CHOICE:
                score = calcChoice(dice);
                break;
        }
    }

    int score()
    {
        return score;
    }

    int calcCombinations(int[] dice, int number)
    {
        return Arrays
            .stream(dice)
            .map(d -> d == number ? 1: 0)
            .sum() * number;
    }

    int calcYatch(int[] dice)
    {
        HashMap<Integer, Integer>map = map(dice);
        return map.size() == 1 ? 50: 0;
    }

    int calcFullHouse(int[] dice)
    {
        HashMap<Integer, Integer>map = map(dice);

        if (map.size() == 2 && map.values().contains(2)) {
            return Arrays.stream(dice).sum();
        } else {
            return 0;
        }
    }

    int calcFourOfAKind(int[] dice)
    {
        HashMap<Integer, Integer>map = map(dice);
        for (Integer key: map.keySet()) {
            if (map.get(key) >= 4) {
                return key * 4;
            }
        }
        return 0;
    }

    int calcLittleStraight(int[] dice)
    {
        HashMap<Integer, Integer>map = map(dice);
        return map.size() == 5 && !map.keySet().contains(6) ?
            30 : 0;
    }

    int calcBigStraight(int[] dice)
    {
        HashMap<Integer, Integer>map = map(dice);
        return map.size() == 5 && !map.keySet().contains(1) ?
            30 : 0;
    }

    int calcChoice(int [] dice)
    {
        return Arrays.stream(dice).sum();
    }

    /**
     * map of number => count
     */
    private HashMap<Integer, Integer> map(int[] dice)
    {
        HashMap<Integer, Integer>map = new HashMap<>();
        for (int d: dice) {
            if (map.containsKey(d)) {
                map.put(d, map.get(d) + 1);
            } else {
                map.put(d, 1);
            }
        }
        return map;
    }
}
