/**
 * Description: Write a function to determine if a given binary tree is a valid binary search tree (BST). A BST is valid if all left nodes are less than the root, and all right nodes are greater than the root.
 *
 * > Input: A binary tree (represented as an array or tree nodes).
 * > Output: true if valid, false otherwise.
 *
 * > Example Input: [2,1,3]
 * > Example Output: true
 *
 */

type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export function isValidBST(root: TreeNode | null): boolean {
  return !Number.isInteger(root?.val) || false
}
