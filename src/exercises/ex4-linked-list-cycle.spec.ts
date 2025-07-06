import {
  // checkLinkedListCycleLinear,
  checkLinkedListCycleFloyd
} from './ex4-linked-list-cycle'
import { LinkedListNode } from '../data-models/linked-list'

function createLinkedList(
  values: number[],
  cycleAtIndex?: number
): LinkedListNode | null {
  if (values.length === 0) return null
  const nodes = values.map((val) => new LinkedListNode(val))
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  if (
    cycleAtIndex !== undefined &&
    cycleAtIndex >= 0 &&
    cycleAtIndex < nodes.length
  ) {
    nodes[nodes.length - 1].next = nodes[cycleAtIndex]
  }
  return nodes[0]
}

describe('checkLinkedListCycleFloyd', () => {
  it('returns false for an empty list', () => {
    expect(checkLinkedListCycleFloyd(null)).toBe(false)
  })
  it('returns false for a single node with no cycle', () => {
    const node = new LinkedListNode(1)
    expect(checkLinkedListCycleFloyd(node)).toBe(false)
  })
  it('returns true for a single node that points to itself', () => {
    const node = new LinkedListNode(1)
    node.next = node
    expect(checkLinkedListCycleFloyd(node)).toBe(true)
  })
  it('returns false for a multi-node list with no cycle', () => {
    const head = createLinkedList([1, 2, 3, 4])
    expect(checkLinkedListCycleFloyd(head)).toBe(false)
  })
  // it('returns true for a multi-node list with a cycle at the beginning', () => {
  //   const head = createLinkedList([1, 2, 3, 4], 0)
  //   expect(checkLinkedListCycleFloyd(head)).toBe(true)
  // })
  // it('returns true for a multi-node list with a cycle in the middle', () => {
  //   const head = createLinkedList([1, 2, 3, 4, 5], 2)
  //   expect(checkLinkedListCycleFloyd(head)).toBe(true)
  // })
  // it('returns false for a two-node list with no cycle', () => {
  //   const head = createLinkedList([1, 2])
  //   expect(checkLinkedListCycleFloyd(head)).toBe(false)
  // })
  // it('returns true for a two-node list with a cycle', () => {
  //   const head = createLinkedList([1, 2], 0)
  //   expect(checkLinkedListCycleFloyd(head)).toBe(true)
  // })
})

// describe('checkLinkedListCycle', () => {
//   it('returns false for an empty list', () => {
//     expect(checkLinkedListCycleLinear(null)).toBe(false)
//   })
//   it('returns false for a single node with no cycle', () => {
//     const node = new LinkedListNode(1)
//     expect(checkLinkedListCycleLinear(node)).toBe(false)
//   })
//   it('returns true for a single node that points to itself', () => {
//     const node = new LinkedListNode(1)
//     node.next = node
//     expect(checkLinkedListCycleLinear(node)).toBe(true)
//   })
//   it('returns false for a multi-node list with no cycle', () => {
//     const head = createLinkedList([1, 2, 3, 4])
//     expect(checkLinkedListCycleLinear(head)).toBe(false)
//   })
//   // it('returns true for a multi-node list with a cycle at the beginning', () => {
//   //   const head = createLinkedList([1, 2, 3, 4], 0)
//   //   expect(checkLinkedListCycleLinear(head)).toBe(true)
//   // })
//   it('returns true for a multi-node list with a cycle at the beginning', () => {
//     const head = createLinkedList([1, 2, 3, 4], 0)
//     expect(checkLinkedListCycleLinear(head)).toBe(true)
//   })
//   it('returns true for a multi-node list with a cycle in the middle', () => {
//     const head = createLinkedList([1, 2, 3, 4, 5], 2)
//     expect(checkLinkedListCycleLinear(head)).toBe(true)
//   })
//   it('returns false for a two-node list with no cycle', () => {
//     const head = createLinkedList([1, 2])
//     expect(checkLinkedListCycleLinear(head)).toBe(false)
//   })
//   it('returns true for a two-node list with a cycle', () => {
//     const head = createLinkedList([1, 2], 0)
//     expect(checkLinkedListCycleLinear(head)).toBe(true)
//   })
//   // it('returns true for a multi-node list with a cycle in the middle', () => {
//   //   const head = createLinkedList([1, 2, 3, 4, 5], 2)
//   //   expect(checkLinkedListCycleLinear(head)).toBe(true)
//   // })

//   // it('returns false for a two-node list with no cycle', () => {
//   //   const head = createLinkedList([1, 2])
//   //   expect(checkLinkedListCycleLinear(head)).toBe(false)
//   // })

//   // it('returns true for a two-node list with a cycle', () => {
//   //   const head = createLinkedList([1, 2], 0)
//   //   expect(checkLinkedListCycleLinear(head)).toBe(true)
//   // })
// })
