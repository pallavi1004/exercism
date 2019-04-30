<?php
function toRna($dna) {
    $transcribes = [
        'G' => 'C',
        'C' => 'G',
        'T' => 'A',
        'A' => 'U'
    ];

    $rna = array_map(
        function ($n) use ($transcribes) {
          return $transcribes[$n];
        },
        str_split($dna)
    );
    return implode($rna, '');
}
