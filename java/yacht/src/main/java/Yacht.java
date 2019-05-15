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
        boolean yatch = true;
        int number = dice[0];
        for (int i = 1; i < dice.length; i++) {
            if (dice[i] != number) {
                yatch = false;
                break;
            }
        }
        return yatch ? 50 : 0;
    }

    int calcFullHouse(int[] dice)
    {
        HashMap<Integer, Integer>map = new HashMap<>();
        for (int d: dice) {
            if (map.containsKey(d)) {
                map.put(d, map.get(d) + 1);
            } else {
                map.put(d, 1);
            }
        }

        if (map.size() == 2 && map.values().contains(2)) {
            return Arrays.stream(dice).sum();
        } else {
            return 0;
        }
    }
}
