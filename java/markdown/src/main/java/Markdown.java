// Refactor by separated complex ul logic

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

class Markdown {
  
    String parse(String markdown)
    {
        String[] lines = markdown.split("\n");
        List<String> results = Arrays.stream(lines)
            .map(l -> parseLine(l))
            .collect(Collectors.toList());

        return String.join("", addUl(results));
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
        return parseSomeSymbols(line);
    }

    private List<String> addUl(List<String> lines)
    {
        boolean activeList = false;
        ListIterator<String> iterator = lines.listIterator();
        while (iterator.hasNext()) {
            String line = iterator.next();
            if (line.startsWith("<li>")) {
                if (!activeList) {
                    iterator.remove();
                    iterator.add("<ul>");
                    iterator.add(line);
                    activeList = true;
                }
            } else if (activeList) {
                iterator.remove();
                iterator.add("</ul>");
                iterator.add(line);
                activeList = false;
            }
        }

        if (activeList) {
            iterator.add("</ul>");
        }
        return lines;
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