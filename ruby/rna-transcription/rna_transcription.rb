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
    rna = dna.chars.map { |ch| self::TRANSCRIPTION_MAP[ch] }.join("")
    if rna.size == dna.size
      rna
    else
      ""
    end
  end
end

