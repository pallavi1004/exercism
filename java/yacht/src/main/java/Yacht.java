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
            score = clacYatch(dice);
        }
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

    int clacYatch(int[] dice)
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

    int score()
    {
        return score;
    }
}
