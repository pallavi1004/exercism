<?php

function raindrops($num) {
    $drops = "";
    if ($num % 3 === 0) {
        $drops .= "Pling";
    }
    if ($num % 5 === 0) {
        $drops .= "Plang";
    }
    if($num % 7 === 0) {
        $drops .= "Plong";
    }

    return empty($drops) ? (string)$num : $drops;
}