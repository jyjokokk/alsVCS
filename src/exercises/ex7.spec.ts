import { isValidBST } from './ex7'

describe('Is valid Binary Search Tree', () => {
  describe('isValidBST', () => {
    xit('should return true for a valid BST', () => {
      const tree1 = {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
      }
      const tree2 = {
        val: 5,
        left: { val: 3, left: null, right: null },
        right: { val: 7, left: null, right: null }
      }
      expect(isValidBST(tree1)).toBe(true)
      expect(isValidBST(tree2)).toBe(true)
    })

    it('should return false for an invalid BST', () => {
      const tree1 = {
        val: 5,
        left: { val: 1, left: null, right: null },
        right: {
          val: 4,
          left: { val: 3, left: null, right: null },
          right: null
        }
      }
      const tree2 = {
        val: 10,
        left: { val: 15, left: null, right: null },
        right: { val: 20, left: null, right: null }
      }
      expect(isValidBST(tree1)).toBe(false)
      expect(isValidBST(tree2)).toBe(false)
    })

    it('should return true for an empty tree', () => {
      expect(isValidBST(null)).toBe(true)
    })
  })
})
