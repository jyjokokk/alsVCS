import type { LinkedListNode } from '../data-models/linked-list'

export function checkLinkedListCycleLinear<T>(
  head: LinkedListNode | null
): boolean {
  let current = head
  const visited = new Set<LinkedListNode>()
  while (current) {
    if (visited.has(current)) {
      return true
    }
    visited.add(current)
    current = current.next
  }
  return false
}

export function checkLinkedListCycleFloyd<T>(
  head: LinkedListNode | null
): boolean {
  let slow: LinkedListNode | null = head
  let fast: LinkedListNode | null = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
