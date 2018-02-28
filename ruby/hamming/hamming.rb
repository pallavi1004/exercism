class Hamming
  def self.compute(a, b)
    return 0 if a.empty?
    ans = 0
    for i in 0..(a.size) do
      ans += 1 if a[i] != b[i]
    end
    ans
  end
end