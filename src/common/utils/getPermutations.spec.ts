import { getPermutations, getUniquesFromArray } from './array-utils'

describe('getPermutations', () => {
  it('returns all permutations for an array of numbers', () => {
    const input = [1, 2, 3]
    const result = getPermutations(input)
    const uniques = getUniquesFromArray(result)
    expect(uniques).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ])
    )
    expect(uniques).toHaveLength(6)
  })

  it('returns all permutations for an array of strings', () => {
    const input = ['a', 'b', 'c']
    const result = getPermutations(input)
    const uniques = getUniquesFromArray(result)
    expect(uniques).toEqual(
      expect.arrayContaining([
        ['c', 'a', 'b'],
        ['b', 'c', 'a'],
        ['b', 'a', 'c'],
        ['c', 'b', 'a'],
        ['a', 'c', 'b'],
        ['a', 'b', 'c']
      ])
    )
    expect(uniques).toHaveLength(6)
  })

  it('returns a single permutation for an array with one element', () => {
    const input = [42]
    const result = getPermutations(input)
    expect(result).toEqual([[42]])
    expect(result).toHaveLength(1)
  })

  it('returns an empty array for an empty input array', () => {
    const input: number[] = []
    const result = getPermutations(input)
    expect(result).toEqual([[]])
    expect(result).toHaveLength(1)
  })

  it('does not mutate the input array', () => {
    const input = [1, 2, 3]
    const inputCopy = [...input]
    getPermutations(input)
    expect(input).toEqual(inputCopy)
  })
})
