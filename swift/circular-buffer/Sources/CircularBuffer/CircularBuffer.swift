//Solution goes in Sources

enum CircularBufferError: Error {
    case bufferEmpty
    case bufferFull
}

class CircularBuffer<T>
{
    var buffer: [T?]
    var readIndex: Int = 0
    var writeIndex: Int = 0
    init(capacity: Int)
    {
        self.buffer = [T?](repeating: nil, count: capacity)
    }

    func read() throws -> T
    {
        if let value = buffer[readIndex] {
            buffer[readIndex] = nil;
            readIndex = nextIndex(readIndex)
            return value
        } else {
            throw CircularBufferError.bufferEmpty
        }
    }

    func write(_ value: T) throws
    {
        if buffer[writeIndex] != nil {
            throw CircularBufferError.bufferFull
        } else {
            buffer[writeIndex] = value
            writeIndex = nextIndex(writeIndex)
        }
    }

    func overwrite(_ value: T)
    {
        if buffer[writeIndex] != nil && readIndex == writeIndex {
            readIndex = nextIndex(readIndex)
        }

        buffer[writeIndex] = value
        writeIndex = nextIndex(writeIndex)
    }

    func clear()
    {
        buffer = [T?](repeating: nil, count: buffer.count)
        readIndex = 0
        writeIndex = 0
    }

    private func nextIndex(_ currentIndex: Int) -> Int
    {
        return currentIndex == (buffer.count - 1) ? 0 : currentIndex + 1
    }
}