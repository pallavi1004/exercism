class Prime
  def self.nth(nth)
    raise ArgumentError.new("There is no zeroth prime") if nth == 0

    current_nth = 0
    current_num = 2
    loop do
      current_nth += 1 if prime?(current_num)
      break if current_nth == nth
      current_num += 1
    end
    current_num
  end

  def self.prime?(num)
    return true if num == 2
    return false if num.even?
    factor_limit = Math.sqrt(num).floor
    !(3..factor_limit).step(2).any? { |n| num % n == 0 }
  end
end

module BookKeeping
  VERSION = 1
end