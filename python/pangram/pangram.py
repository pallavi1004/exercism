import re

def is_pangram(sentence):
    normalized = re.sub(r'[^a-z]', '', sentence.lower())
    return len(set(list(normalized))) >= 26
