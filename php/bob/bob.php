<?php
class Bob {
    public function respondTo($phrase) {
        if ($this->isNotSayingAnything($phrase)) {
            return "Fine. Be that way!";
        } elseif ($this->isYell($phrase) && $this->isQuestion($phrase)) {
            return "Calm down, I know what I'm doing!";
        } elseif ($this->isYell($phrase)) {
            return "Whoa, chill out!";
        } elseif ($this->isQuestion($phrase)) {
            return "Sure.";
        }

        return "Whatever.";
    }

    private function isNotSayingAnything($phrase) {
        return empty($phrase)
            || preg_match("/^\s+$/", $phrase) === 1;
    }

    private function isYell($phrase) {
        return preg_match("/[a-z]/", $phrase) !== 1
            && preg_match("/[A-Z]/", $phrase) === 1;
    }

    private function isQuestion($phrase) {
        return preg_match("/\?\s*$/", $phrase) === 1;
    }
}