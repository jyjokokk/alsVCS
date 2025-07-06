import { swapElements } from './array-utils'

describe('swapElements', () => {
  it('swaps two elements in an array of numbers', () => {
    const arr = [1, 2, 3]
    swapElements(arr, 0, 2)
    expect(arr).toEqual([3, 2, 1])
  })

  it('swaps two elements in an array of strings', () => {
    const arr = ['a', 'b', 'c']
    swapElements(arr, 1, 2)
    expect(arr).toEqual(['a', 'c', 'b'])
  })

  it('swaps the same index (no change)', () => {
    const arr = [1, 2, 3]
    swapElements(arr, 1, 1)
    expect(arr).toEqual([1, 2, 3])
  })

  it('works with empty array (no error)', () => {
    const arr: number[] = []
    swapElements(arr, 0, 0)
    expect(arr).toEqual([])
  })

  it('swaps objects in an array', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const arr = [obj1, obj2]
    swapElements(arr, 0, 1)
    expect(arr).toEqual([obj2, obj1])
  })

  it('swaps elements at the start and end of the array', () => {
    const arr = [1, 2, 3, 4]
    swapElements(arr, 0, 3)
    expect(arr).toEqual([4, 2, 3, 1])
  })
})
