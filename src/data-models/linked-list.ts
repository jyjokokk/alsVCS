export class LinkedListNode<T = any> {
  next: LinkedListNode<T> | null = null
  constructor(readonly value: T) {}

  toString(): string {
    return `Node(${this.value})`
  }

  *[Symbol.iterator](): IterableIterator<LinkedListNode<T>> {
    let current: LinkedListNode<T> | null = this
    while (current) {
      yield current
      current = current.next
    }
  }
}

// export type LinkedListNode
