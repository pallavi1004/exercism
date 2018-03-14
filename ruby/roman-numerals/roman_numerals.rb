class Integer
  def to_roman
    ConvertRoman.convert(self)
  end

  module ConvertRoman
    CONVERT_TABLE = {
        1000 => "M",
        500 => "D",
        100 => "C",
        50 => "L",
        10 => "X",
        5 => "V",
        1 => "I",
    }

    class << self
      def convert(number)
        roman = ""
        CONVERT_TABLE.each do |n, r|
          roman << r * (number / n)
          number %= n

          basic = calc_basic(n)
          if number >= (n - basic)
            roman << CONVERT_TABLE[basic] + r
            number -= n - basic
            next
          end
        end
        roman
      end

      def calc_basic(number)
        n = number
        while n > 10
          n /= 10
        end
        if n == 1
          number / 10
        else
          number / n
        end
      end
    end
  end
end


module BookKeeping
  VERSION = 2
end