import java.util.ArrayList;

class Proverb {

    private String[] words;

    Proverb(String[] words) {
        this.words = words;
    }

    String recite() {
        if (this.words.length == 0) {
            return "";
        }

        ArrayList<String> lines = new ArrayList<>();
        for (int i = 1; i < this.words.length; i++) {
            lines.add("For want of a " + this.words[i-1] + " the " + this.words[i] + " was lost.");
        }
        lines.add("And all for the want of a " + this.words[0] + ".");

        return String.join("\n", lines);
    }

}
