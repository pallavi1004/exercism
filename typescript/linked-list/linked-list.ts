class Node<T> {

    private _prev: Node<T> | null = null
    private _next: Node<T> | null = null

    private readonly _value: T;
    constructor(v:T) {
        this._value = v
    }

    get next(): Node<T> | null { return this._next }
    set next(node: Node<T> | null) { this._next = node }

    get prev(): Node<T> | null { return this._prev }
    set prev(node: Node<T> | null) { this._prev = node }

    get value(): T { return this._value }
}

export default class LinkedList<T> {
    private lastNode: Node<T> | null = null
    private firstNode: Node<T> | null = null

    public push(value: T): void  {
        const newNode = new Node(value)
        if (this.lastNode == null) {
            this.lastNode = this.firstNode = newNode
        } else {
            this.lastNode.next = newNode
            newNode.prev = this.lastNode
            this.lastNode = newNode
        }
    }

    public unshift(value: T): void {
        const newNode = new Node(value)
        if (this.firstNode == null) {
            this.lastNode = this.firstNode = newNode
        } else {
            this.firstNode.prev = newNode
            newNode.next = this.firstNode
            this.firstNode = newNode
        }
    }

    public pop(): T {
        const ret = this.lastNode!.value
        this.lastNode = this.lastNode!.prev
        if (this.lastNode == null) {
            this.firstNode = null
        }
        return ret
    }

    public shift(): T {
        const ret = this.firstNode!.value
        this.firstNode = this.firstNode!.next
        if (this.firstNode == null) {
            this.lastNode = null
        }
        return ret
    }

    public count(): number {
        let ret = 0
        for (let n = this.firstNode; n != null; n = n!.next) {
            ret++
        }
        return ret
    }

    public  delete(value: T): void {
        let target: Node<T> | null = null
        for (let n = this.firstNode; n != null; n = n!.next) {
            if (n.value == value) {
                target = n
                break
            }
        }

        if (target != null) {
            if (target.prev != null) {
                target.prev.next = target.next
            }
            if (target.next != null) {
                target.next.prev = target.prev
            }
            if (this.firstNode == target) {
                this.firstNode = target.next
            }
            if (this.lastNode == target) {
                this.lastNode = target.prev
            }
        }
    }
}