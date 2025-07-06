import { groupAnagrams } from './ex2'

describe('groupAnagrams', () => {
  it('should group anagrams together', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
    const output = groupAnagrams(input)
    expect(output).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
  })

  it('should return empty array for empty input', () => {
    const input: string[] = []
    const output = groupAnagrams(input)
    expect(output).toEqual([])
  })

  it('should handle single word input', () => {
    const input = ['hello']
    const output = groupAnagrams(input)
    expect(output).toEqual([['hello']])
  })
})
