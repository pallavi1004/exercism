class Squares
  def initialize(num)
    @num = num
  end

  def square_of_sum
    sum = (1..@num).inject(:+)
    sum * sum
  end

  def sum_of_squares
    (1..@num).inject { |sum, n| sum + n * n }
  end

  def difference
    (square_of_sum - sum_of_squares).abs
  end
end

module BookKeeping
  VERSION = 4
end