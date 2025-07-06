import { BinarySearchTree } from './binary-search-tree'

describe('Binary Search Tree', () => {
  it('should insert values correctly', () => {
    const bst = new BinarySearchTree(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)
    bst.insert(18)

    expect(bst.root.left?.value).toBe(5)
    expect(bst.root.right?.value).toBe(15)
    expect(bst.root.left?.left?.value).toBe(3)
    expect(bst.root.left?.right?.value).toBe(7)
    expect(bst.root.right?.left?.value).toBe(12)
    expect(bst.root.right?.right?.value).toBe(18)
  })
  it('should delete values correctly', () => {
    const bst = new BinarySearchTree(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)
    bst.insert(18)

    bst.delete(5)
    expect(bst.root.left?.value).toBe(7) // 5 is deleted, 7 takes its place

    bst.delete(15)
    expect(bst.root.right?.value).toBe(18) // 15 is deleted, 18 takes its place

    bst.delete(10)
    expect(bst.root.value).toBe(12) // 10 is deleted, 12 takes its place
  })
  it('should find values correctly', () => {
    const bst = new BinarySearchTree(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(12)
    bst.insert(18)

    expect(bst.find(7)?.value).toBe(7)
    expect(bst.find(12)?.value).toBe(12)
    expect(bst.find(20)).toBeNull() // 20 does not exist in the tree
  })
  it('should handle edge cases', () => {
    const bst = new BinarySearchTree(10)
    expect(bst.find(10)?.value).toBe(10) // root exists
    expect(bst.find(5)).toBeNull() // 5 does not exist

    bst.delete(10)
    expect(bst.root.value).toBe(-1) // root should be set to -1 after deletion
    bst.delete(10) // deleting the root again should not throw an error
  })

  // it('should print the tree structure', () => {
  //   const bst = new BinarySearchTree(10)
  //   bst.insert(5)
  //   bst.insert(15)
  //   bst.insert(3)
  //   bst.insert(7)
  //   bst.insert(12)
  //   bst.insert(18)

  //   const expectedStructure = `
  //   │       ┌── 18
  //   │   ┌── 15
  //   │   │   └── 12
  //   └── 10
  //       │   ┌── 7
  //       └── 5
  //           └── 3
  //   `

  //   expect(bst.print().trim()[0]).toBe(expectedStructure.trim()[0])
  // })
})
