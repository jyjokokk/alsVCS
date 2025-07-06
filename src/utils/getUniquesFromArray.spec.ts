import { getUniquesFromArray } from './array-utils'

describe('getUniquesFromArray', () => {
  it('returns unique primitive values', () => {
    expect(getUniquesFromArray([1, 2, 2, 3, 1])).toEqual([1, 2, 3])
    expect(getUniquesFromArray(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
  })

  it('returns unique objects by value', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 1 }]
    expect(getUniquesFromArray(arr)).toEqual([{ a: 1 }, { a: 2 }])
  })

  it('handles empty array', () => {
    expect(getUniquesFromArray([])).toEqual([])
  })

  it('handles array with all unique values', () => {
    expect(getUniquesFromArray([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles array with all duplicate values', () => {
    expect(getUniquesFromArray([5, 5, 5, 5])).toEqual([5])
  })

  it('handles array with mixed types', () => {
    expect(getUniquesFromArray([1, '1', 1, '1'])).toEqual([1, '1'])
  })

  it('handles nested objects', () => {
    const arr = [{ a: { b: 1 } }, { a: { b: 1 } }, { a: { b: 2 } }]
    expect(getUniquesFromArray(arr)).toEqual([{ a: { b: 1 } }, { a: { b: 2 } }])
  })

  it('handles arrays as elements', () => {
    const arr = [
      [1, 2],
      [1, 2],
      [2, 3]
    ]
    expect(getUniquesFromArray(arr)).toEqual([
      [1, 2],
      [2, 3]
    ])
  })
})
