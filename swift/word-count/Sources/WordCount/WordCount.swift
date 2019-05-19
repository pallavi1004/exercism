import Foundation

class WordCount
{
    private let phrase: String
    init (words: String)
    {
        self.phrase = words
    }

    func count() -> Dictionary<String, Int>
    {
        var counts : Dictionary<String, Int> = [:]
        let words =  phrase
            .split(separator:" ")
            .map { String($0) }
            .map { normalize($0) }
            .filter { isWord($0) }

        for word in words {
            if let count = counts[word] {
                counts[word] = count + 1
            } else {
                counts[word] = 1;
            }
        }

        return counts
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