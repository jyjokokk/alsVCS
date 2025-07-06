import { lengthOfLongestSubstring, exampleAnswer } from './ex1'

describe('Length of the longest substring', () => {
  describe('lengthOfLongestSubstring', () => {
    it('should return the length of the longest substring', () => {
      const r1 = lengthOfLongestSubstring('abcabcbb')
      const r2 = lengthOfLongestSubstring('bbbbb')
      const r3 = lengthOfLongestSubstring('pwwkew')
      const r4 = lengthOfLongestSubstring('')
      const r5 = lengthOfLongestSubstring('dvdfg')
      expect(r1).toBe(3) // "abc"
      expect(r2).toBe(1) // "b"
      expect(r3).toBe(3) // "wke"
      expect(r4).toBe(0) // ""
      expect(r5).toBe(4) // "vdfg"
    })
  })

  describe('Example answer', () => {
    it('should return the length of the longest substring', () => {
      const r1 = exampleAnswer('abcabcbb')
      const r2 = exampleAnswer('bbbbb')
      const r3 = exampleAnswer('pwwkew')
      const r4 = exampleAnswer('')
      const r5 = exampleAnswer('dvdfg')
      expect(r1).toBe(3) // "abc"
      expect(r2).toBe(1) // "b"
      expect(r3).toBe(3) // "wke"
      expect(r4).toBe(0) // ""
      expect(r5).toBe(4) // "vdfg"
    })
  })
})
