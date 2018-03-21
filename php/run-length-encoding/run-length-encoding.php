<?php

//
// This is only a SKELETON file for the "Run Length Encoding" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function encode($input)
{
    $encoded = "";
    $currentCh = "";
    $count = 0;
    foreach(str_split($input) as $ch) {
        if ($currentCh === "") {
            $currentCh = $ch;
            $count++;
        } elseif ($currentCh === $ch) {
            $count++;
        } else {
            $encoded .= partialEncode($currentCh, $count);
            $currentCh = $ch;
            $count = 1;
        }
    }
    return $encoded .  partialEncode($currentCh, $count);
}

function partialEncode($ch, $count)
{
    $encoded = "";
    if ($count === 1) {
        $encoded .= $ch;
    } elseif ($count !== 0) {
        $encoded .= $count . $ch;
    }
    return $encoded;
}

function decode($input)
{
    $decoded = "";
    $countBuffer = "";
    foreach(str_split($input) as $ch) {
        if (preg_match("/[A-Za-z\s]/", $ch) === 1) {
            $decoded .= partialDecoded($ch, $countBuffer);
            $countBuffer = "";
        } else {
            $countBuffer .= $ch;
        }
    }
    return $decoded;
}

function partialDecoded($ch, $countBuffer)
{
    $decoded = "";
    if ($countBuffer === "") {
        $count = 1;
    } else {
        $count = intval($countBuffer);
    }
    for ($i = 0; $i < $count; $i++) {
        $decoded .= $ch;
    }
    return $decoded;
}
