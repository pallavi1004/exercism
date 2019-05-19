import Foundation

class WordCount
{
    private let phrase: String
    init (words: String)
    {
        self.phrase = words
    }

    func count() -> [String: Int]
    {
        return phrase
            .split(separator:" ")
            .map { String($0) }
            .map { normalize($0) }
            .filter { isWord($0) }
            .reduce(into: [:]) { result, word in
                result[word, default: 0] += 1
            }
    }

    private func normalize(_ word: String) -> String
    {
        return word
            .replacingOccurrences(
                of:"^(\\w+).*$",
                with:"$1",
                options: .regularExpression
            )
            .lowercased()
    }

    private func isWord(_ word: String) -> Bool
    {
        return word.range(of:"\\w+", options: .regularExpression ) != nil
    }
}