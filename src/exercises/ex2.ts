/**
 * Given an array of strings, group the anagrams together.
 *
 * > Input: `["eat","tea","tan","ate","nat","bat"]`
 * > Output: `[["eat","tea","ate"],["tan","nat"],["bat"]]i
 *
 */

export function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap = new Map<string, string[]>()
  for (const str of strs) {
    const letters = str.split('').sort().join('')
    anagramsMap.set(letters, (anagramsMap.get(letters) || []).concat(str))
  }
  const groups = []
  for (const [key] of anagramsMap) {
    const k = anagramsMap.get(key)
    groups.push(k ? k : [])
  }
  return groups
}
