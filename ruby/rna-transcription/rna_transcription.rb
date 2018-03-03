module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end

class Complement
  TRANSCRIPTION_MAP = {
      "G" => "C",
      "C" => "G",
      "T" => "A",
      "A" => "U",
  }
  def self.of_dna(dna)
    dna.chars.map do |ch|
      TRANSCRIPTION_MAP[ch] or break []
    end.join("")
  end
end

