class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase.downcase
           .scan(/[a-z0-9']+/)
           .each_with_object({}) { |word, result|
             word = word.sub(/^'([a-z0-9']+)'$/, "\\1")
             result[word] = result.key?(word) ? result[word] + 1 : 1
           }
  end
end
