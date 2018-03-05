<?php
function from($date) {
    $added = clone $date;
    $added->add(new DateInterval("PT1000000000S"));
    return $added;
}