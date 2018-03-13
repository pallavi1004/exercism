module BookKeeping
  VERSION = 6
end

class Pangram
  def self.pangram?(phrase)
    alphabets = phrase
      .downcase
      .chars
      .uniq
      .select { |ch| ch.match(/[a-z]/) }

    alphabets.size == 26
  end
end