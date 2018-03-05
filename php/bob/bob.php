<?php
class Bob {
    public function respondTo($phrase) {
        $phrase = trim($phrase);
        if (empty($phrase)) {
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

    private function isYell($phrase) {
        return preg_match("/[a-z]/", $phrase) !== 1
            && preg_match("/[A-Z]/", $phrase) === 1;
    }

    private function isQuestion($phrase) {
        return preg_match("/\?$/", $phrase) === 1;
    }
}