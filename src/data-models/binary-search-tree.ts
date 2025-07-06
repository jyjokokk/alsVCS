export interface TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode
}

export class BinarySearchTree {
  root: TreeNode

  constructor(readonly value: number) {
    this.root = {
      value
    }
  }

  insert(value: number, node: TreeNode = this.root): TreeNode {
    if (value > node.value) {
      if (node.right) {
        return this.insert(value, node.right)
      }
      node.right = {
        value
      }
      return node
    }
    if (value < node.value) {
      if (node.left) {
        return this.insert(value, node.left)
      }
      node.left = {
        value
      }
    }
    return node
  }

  delete(value: number): void {
    this.root = this._deleteRec(this.root, value) || { value: -1 }
  }

  private _deleteRec(
    node: TreeNode | undefined,
    value: number
  ): TreeNode | undefined {
    if (!node) return undefined

    if (value < node.value) {
      node.left = this._deleteRec(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this._deleteRec(node.right, value)
      return node
    } else {
      // Node to be deleted found
      if (!node.left && !node.right) {
        return undefined
      }
      if (!node.left) {
        return node.right
      }
      if (!node.right) {
        return node.left
      }
      // Node with two children: get the inorder successor (min in right subtree)
      let minNode = node.right
      while (minNode.left) {
        minNode = minNode.left
      }
      node.value = minNode.value
      node.right = this._deleteRec(node.right, minNode.value)
      return node
    }
  }

  find(value: number, node: TreeNode = this.root): TreeNode | null {
    if (value === node.value) {
      return node
    }
    if (value > node.value) {
      if (node.right) {
        return this.find(value, node.right)
      }
    }
    if (value < node.value) {
      if (node.left) {
        return this.find(value, node.left)
      }
    }
    return null
  }

  min(): TreeNode {
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current
  }

  max(): TreeNode {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current
  }

  print(
    node: TreeNode = this.root,
    prefix: string = '',
    isLeft: boolean = true
  ): string {
    if (!node) return ''
    let result = ''
    if (node.right) {
      result += this.print(
        node.right,
        prefix + (isLeft ? '│   ' : '    '),
        false
      )
    }
    result += prefix
    result += isLeft ? '└── ' : '┌── '
    result += node.value + '\n'
    if (node.left) {
      result += this.print(node.left, prefix + (isLeft ? '    ' : '│   '), true)
    }
    return result
  }

  toString(): string {
    const values: number[] = []
    function inOrder(node?: TreeNode) {
      if (!node) return
      inOrder(node.left)
      values.push(node.value)
      inOrder(node.right)
    }
    inOrder(this.root)
    return values.join(', ')
  }
}

export class ExampleBinarySearchTree {
  root: TreeNode

  constructor(value: number) {
    this.root = { value }
  }

  insert(value: number, node: TreeNode = this.root): TreeNode {
    if (value === node.value) return node // No duplicates
    if (value < node.value) {
      if (node.left) {
        return this.insert(value, node.left)
      } else {
        node.left = { value }
        return node.left
      }
    } else {
      if (node.right) {
        return this.insert(value, node.right)
      } else {
        node.right = { value }
        return node.right
      }
    }
  }

  delete(value: number): void {
    this.root = this._deleteRec(this.root, value) ?? { value: -1 }
  }

  private _deleteRec(
    node: TreeNode | undefined,
    value: number
  ): TreeNode | undefined {
    if (!node) return undefined
    if (value < node.value) {
      node.left = this._deleteRec(node.left, value)
    } else if (value > node.value) {
      node.right = this._deleteRec(node.right, value)
    } else {
      if (!node.left) return node.right
      if (!node.right) return node.left
      // Node with two children: get the inorder successor
      let minNode = node.right
      while (minNode.left) minNode = minNode.left
      node.value = minNode.value
      node.right = this._deleteRec(node.right, minNode.value)
    }
    return node
  }

  find(value: number, node: TreeNode = this.root): TreeNode | null {
    if (!node) return null
    if (value === node.value) return node
    if (value < node.value)
      return node.left ? this.find(value, node.left) : null
    return node.right ? this.find(value, node.right) : null
  }

  min(node: TreeNode = this.root): TreeNode {
    let current = node
    while (current.left) current = current.left
    return current
  }

  max(node: TreeNode = this.root): TreeNode {
    let current = node
    while (current.right) current = current.right
    return current
  }
}
