class Twofer {
    String twofer(String name) {
        String outputName;
        if (name == null) {
            outputName = "you";
        } else {
            outputName = name;
        }

        return "One for " + outputName + ", one for me.";
    }
}
