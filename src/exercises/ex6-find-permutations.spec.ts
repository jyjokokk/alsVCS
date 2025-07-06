import { getUniquesFromArray } from '../utils/array-utils'
import { findPermutations } from './ex6-find-permutations'

describe('findPermutations', () => {
  it('should return all permutations for "abc"', () => {
    const result = findPermutations('abc')
    expect(result.sort()).toEqual(
      ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort()
    )
  })

  it('should return all permutations for "ab"', () => {
    const result = findPermutations('ab')
    expect(result.sort()).toEqual(['ab', 'ba'].sort())
  })

  it('should return the string itself for a single character', () => {
    const result = findPermutations('a')
    expect(result).toEqual(['a'])
  })

  it('should return an empty array for an empty string', () => {
    const result = findPermutations('')
    expect(result).toEqual([''])
  })

  it('should handle strings with duplicate characters', () => {
    const result = findPermutations('aab')
    expect(result.sort()).toEqual(['aab', 'aba', 'baa'])
  })
  it('should handle strings with more characters', () => {
    const result = findPermutations('abcd')
    const rUnique = getUniquesFromArray(result)
    const expectedUniques = [
      'abcd',
      'abdc',
      'acbd',
      'acdb',
      'adbc',
      'adcb',
      'bacd',
      'badc',
      'bcad',
      'bcda',
      'bdac',
      'bdca',
      'cabd',
      'cadb',
      'cbad',
      'cbda',
      'cdab',
      'cdba',
      'dabc',
      'dacb',
      'dbac',
      'dbca',
      'dcab',
      'dcba'
    ]
    expect(rUnique.sort()).toEqual(expectedUniques.sort())
  })
})
