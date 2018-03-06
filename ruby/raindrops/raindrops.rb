class Raindrops
  def self.convert(input)
    output = ""
    output << "Pling" if input % 3 == 0
    output << "Plang" if input % 5 == 0
    output << "Plong" if input % 7 == 0

    output == "" ? input.to_s : output
  end
end

module BookKeeping
  VERSION = 3
end