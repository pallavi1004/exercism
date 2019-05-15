import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Yacht {

    private int score;
    private Map<YachtCategory, Integer> combinations = new HashMap<YachtCategory, Integer>() {
        {put(YachtCategory.ONES, 1);}
        {put(YachtCategory.TWOS, 2);}
        {put(YachtCategory.THREES, 3);}
        {put(YachtCategory.FOURS, 4);}
        {put(YachtCategory.FIVES, 5);}
        {put(YachtCategory.SIXES, 6);}
    };

    Yacht(int[] dice, YachtCategory yachtCategory)
    {
        if (combinations.keySet().contains(yachtCategory)) {
            score = calcCombinations(dice, yachtCategory);
        } else if (yachtCategory == YachtCategory.YACHT) {
            score = calcYatch(dice);
        } else if (yachtCategory == YachtCategory.FULL_HOUSE) {
            score = calcFullHouse(dice);
        } else if (yachtCategory == YachtCategory.FOUR_OF_A_KIND) {
            score = calcFourOfAKind(dice);
        }
    }

    int score()
    {
        return score;
    }

    int calcCombinations(int[] dice, YachtCategory yachtCategory)
    {
        int targetNumber = combinations.get(yachtCategory);
        int count = 0;
        for (int d: dice) {
            if (d == targetNumber) {
                count++;
            }
        }
        return count * targetNumber;
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
