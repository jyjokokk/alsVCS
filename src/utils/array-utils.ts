/**
 * Returns a new array containing only the unique elements from the input array.
 * Uniqueness is determined by the JSON stringified representation of each element.
 *
 * @returns A new array with duplicates removed, preserving the order of first occurrence.
 */
export function getUniquesFromArray<T>(arr: T[]): T[] {
  const seen = new Set<string>()
  const unique = arr.filter((item) => {
    const key = JSON.stringify(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  return unique
}

/**
 * Swaps the elements at the specified indices in the given array in place.
 *
 * @param arr - The array whose elements will be swapped.
 * @param index1 - The index of the first element to swap.
 * @param index2 - The index of the second element to swap.
 *
 * @returns - The changed array with the elements swapped in place.
 */
export function swapElements<T>(arr: T[], index1: number, index2: number) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

/**
 * Generates all permutations of the given array `sArr` using backtracking.
 *
 * @template T - The type of elements in the array.
 * @param start - The starting index for generating permutations.
 * @param arr - The array to permute. This array is mutated during the process.
 * @param result - The array that accumulates all generated permutations.
 *
 */
function backtrack<T>(start: number, arr: T[], result: T[][]) {
  if (start === arr.length) {
    result.push([...arr])
    return
  }

  for (const [i, _item] of arr.entries()) {
    // swap the current index with the start
    swapElements(arr, i, start)
    backtrack(start + 1, arr, result)
    // backtrack (undo the swap)
    swapElements(arr, i, start)
  }
}

/**
 * Generates all possible permutations of the input array.
 *
 * @param s - The array of elements to permute.
 * @returns An array containing all permutations of the input array.
 */
export function getPermutations<T>(s: T[]): T[][] {
  const result: T[][] = []
  const copyOfArray = [...s]
  backtrack(0, copyOfArray, result)
  return result
}

/**
 * Creates a deep clone of the provided value.
 *
 * Recursively copies arrays and plain objects, ensuring that nested structures
 * are duplicated rather than referenced. Primitive values are returned as-is.
 *
 * @returns A deep clone of the input value.
 */
export function deepClone<T>(value: T): T {
  if (Array.isArray(value)) {
    return deepCloneArray(value) as T
  } else if (value && typeof value === 'object') {
    const cloned: any = {}
    for (const key in value) {
      cloned[key] = deepClone((value as any)[key])
    }
    return cloned
  }
  return value
}

export function deepCloneArray<T>(arr: T[]): T[] {
  return arr.map((item) => deepClone(item))
}
