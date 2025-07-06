/**
 * Find All Permutations of a String
 *
 * Write a function that generates all possible permutations of a given string.
 * Input: `"abc"`
 * Output: `["abc", "acb", "bac", "bca", "cab", "cba"]`
 */

import {
  getPermutations,
  getUniquesFromArray,
  swapElements
} from '../utils/array-utils'

export function permutationFinder(index: number, s: string[], found: string[]) {
  if (index === s.length) {
    found.push(s.join(''))
  }
  for (let i = index; i < s.length; i++) {
    swapElements(s, index, i)
    permutationFinder(index + 1, s, found)
    swapElements(s, index, i)
  }
}

export function findPermutations(str: string): string[] {
  let sorted = str.split('').sort()
  // const permutations: string[] = []
  // permutationFinder(0, sorted, permutations)
  // const r1 = findPermutationsIterative(str)
  // const r = Array.from(permutations)
  const permutationArrays = getPermutations(sorted)
  const permutationStrings = permutationArrays.map((p) => p.join(''))
  const uniquePermutations = getUniquesFromArray(permutationStrings)
  return uniquePermutations.sort()
}

// TODO: Non-recursive version using Heap's algorithm
export function findPermutationsIterative(str: string): string[] {
  const arr = str.split('')
  const n = arr.length
  const result: string[] = []
  const c = new Array(n).fill(0)
  result.push(arr.join(''))

  let i = 0
  while (i < n) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        swapElements(arr, 0, i)
      } else {
        swapElements(arr, c[i], i)
      }
      result.push(arr.join(''))
      c[i] += 1
      i = 0
    } else {
      c[i] = 0
      i += 1
    }
  }
  return result
}
