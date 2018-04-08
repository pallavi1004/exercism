<?php

function isIsogram($str)
{
    $used = [];
    $str = str_replace([" ", "-"], "", mb_strtolower($str));

    for ($i = 0, $len = mb_strlen($str); $i < $len; $i++) {
        $char = mb_substr($str, $i, 1);
        if (isset($used[$char])) {
            return false;
        }
        $used[$char] = true;
    }
    return true;
}