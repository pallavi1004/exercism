class Integer
  def to_roman
    ConvertRoman.convert(self)
  end

  module ConvertRoman
    CONVERT_TABLE = {
        1000 => "M",
        900 => "CM",
        500 => "D",
        400 => "CD",
        100 => "C",
        90 => "XC",
        50 => "L",
        40 => "XL",
        10 => "X",
        9 => "IX",
        5 => "V",
        4 => "IV",
        1 => "I",
    }

    class << self
      def convert(number)
        roman = ""
        CONVERT_TABLE.each do |n, r|
          roman << r * (number / n)
          number %= n
        end
        roman
      end
    end
  end
end


module BookKeeping
  VERSION = 2
end