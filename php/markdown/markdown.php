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
    if (!parseHeader($line) && !parseListItem($line)) {
        $line = "<p>{$line}</p>";
    }
    parsePartial($line);
    return $line;
}

function parsePartial(&$line)
{
    $line = preg_replace("/__(.+)__/", "<em>$1</em>", $line);
    $line = preg_replace("/_(.+)_/", "<i>$1</i>", $line);
}

function parseHeader(&$line)
{
    if (!preg_match("/^#/", $line)) {
     return false;
    }

    $line = preg_replace_callback('/^(#+)\s+(.*)$/', function ($matches) {
        $headLevel = strlen($matches[1]);
        return "<h{$headLevel}>{$matches[2]}</h{$headLevel}>";
    }, $line);

    return true;
}

function parseListItem(&$line)
{
    if (!preg_match("/^\*/", $line)) {
        return false;
    }

    $content = substr($line, 2);
    // adjust for strange test case
    if (preg_match("/^_/", $content)) {
        $line =  "<li>" . $content . "</li>";
    } else {
        $line = "<li><p>" . $content . "</p></li>";
    }
    return true;
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