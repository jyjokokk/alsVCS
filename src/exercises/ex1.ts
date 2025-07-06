/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * > Input: "abcabcbb"
 * > Output: 3 ("abc")
 */

// My answer
export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const seenChars = new Set<string>()
    let currentLength = 0
    if (seenChars.has(s[i])) {
      continue
    }
    seenChars.add(s[i])
    currentLength += 1
    for (let j = i + 1; j < s.length; j++) {
      if (seenChars.has(s[j])) {
        break
      }
      seenChars.add(s[j])
      currentLength += 1
    }
    if (currentLength > maxLength) {
      maxLength = currentLength
    }
  }
  return maxLength
}

// copilot suggested answer
export function exampleAnswer(s: string): number {
  let maxLength = 0
  let left = 0
  const seen = new Map<string, number>()

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1
    }
    seen.set(char, right)
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}
