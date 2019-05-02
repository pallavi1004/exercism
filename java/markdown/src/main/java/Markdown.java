// Refactor by separated complex ul logic

import java.util.ArrayList;

class Markdown {
  
    String parse(String markdown) {

        String[] lines = markdown.split("\n");

        String result = "";
        ArrayList<String> results = new ArrayList();

        for (String line : lines) {
            line = parseLine(line);
            results.add(parseSomeSymbols(line));
        }

        return String.join("", addUl(results.toArray(String[]::new)));
    }

    private String parseLine(String line)
    {
        if (line.startsWith("#")) {
            line = parseHeader(line);
        } else if (line.startsWith("*")) {
            line = parseListItem(line);
        } else {
            line = parseParagraph(line);
        }
        return line;
    }

    private String[] addUl(String[] markdowns)
    {
        boolean activeList = false;
        ArrayList<String> results = new ArrayList();
        for (String markdown : markdowns) {
            if (markdown.startsWith("<li>")) {
                if (!activeList) {
                    results.add("<ul>");
                    activeList = true;
                }
            } else if (activeList) {
                results.add("</ul>");
                activeList = false;
            }
            results.add(markdown);
        }

        if (activeList) {
            results.add("</ul>");
        }
        return results.toArray(String[]::new);
    }

    private String parseHeader(String markdown) {
        int count = 0;

        for (int i = 0; i < markdown.length() && markdown.charAt(i) == '#'; i++) 
        {
            count++;
        }

        if (count == 0) { return null; }

        return "<h" + Integer.toString(count) + ">" + markdown.substring(count + 1) + "</h" + Integer.toString(count)+ ">";
    }

    private String parseListItem(String markdown) {
        if (markdown.startsWith("*")) {
            String listItemString = markdown.substring(2);
            return "<li>" + listItemString + "</li>";
        }

        return null;
    }

    private String parseParagraph(String markdown) {
        return "<p>" + markdown + "</p>";
    }

    private String parseSomeSymbols(String markdown) {
        return markdown.replaceAll("__(.+)__", "<strong>$1</strong>").replaceAll("_(.+)_", "<em>$1</em>");
    }
}