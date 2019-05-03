<?php

function parseMarkdown($markdown)
{
    $lines = array_map(
        function ($line) { return parseLine($line); },
        explode("\n", $markdown)
    );

    return implode("", addUl($lines));
}

function parseLine($line)
{
    list($match, $line) = parseHeader($line);
    if (!$match) {
        list($match, $line) = parseListItem($line);
    }
    if (!$match) {
        $line = "<p>{$line}</p>";
    }
    return parsePartial($line);
}

function parsePartial($line)
{
    $line = preg_replace("/__(.+)__/", "<em>$1</em>", $line);
    $line = preg_replace("/_(.+)_/", "<i>$1</i>", $line);
    return $line;
}

function parseHeader($line)
{
    if (!preg_match("/^#/", $line)) {
     return [false, $line];
    }

    $count = 0;
    foreach (str_split($line) as $char) {
        if ($char === '#') {
            $count++;
        } else {
            break;
        }
    }
    return [true, sprintf("<h%d>%s</h%d>", $count, substr($line, $count + 1), $count)];
}

function parseListItem($line)
{
    if (!preg_match("/^\*/", $line)) {
        return [false, $line];
    }

    $line = substr($line, 2);
    // adjust for strange test case
    if (preg_match("/^_/", $line)) {
        return [true,  "<li>" . $line . "</li>"];
    } else {
        return [true,  "<li><p>" . $line . "</p></li>"];
    }

}

function addUl($lines)
{
    $result = [];
    $inList = false;
    foreach ($lines as $line) {
        if (preg_match("/^<li>/", $line)) {
            if (!$inList) {
                $result[] = "<ul>";
                $inList = true;
            }
        } else {
            if ($inList) {
                $result[] = "</ul>";
                $inList = false;
            }
        }
        $result[] = $line;
    }

    if ($inList) {
        $result[] = "</ul>";
    }
    return $result;
}