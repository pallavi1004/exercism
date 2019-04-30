<?php

function isPangram($str)
{
    $normalized =  mb_ereg_replace("[^a-z]", "", mb_strtolower($str));
    return count(array_unique(str_split($normalized))) >= 26;
}