//Solution goes in Sources
class Pangram {

    private static let alphabetLetters = Set("abcdefghijklmnopqrstuvwxyz")

    static func isPangram(_ input: String) -> Bool
    {
       return Set(input.lowercased()).isSuperset(of: alphabetLetters)
    }
}