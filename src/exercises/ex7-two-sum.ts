/**
 * Two Sum (with Indices)
 *
 * Given an array of integers and a target sum, return the indices of two numbers such that they add up to the target.
 * Example Input: `nums = [2, 7, 11, 15], target = 9`
 * Example Output: `[0, 1] // (because nums[0] + nums[1] = 2 + 7 = 9)`
 */
export function twoSumIndices(arr: number[], target: number): number[] {
  let answer: number[] = []
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (current + arr[j] === target) {
        answer.push(i)
        answer.push(j)
        break
      }
    }
  }
  return answer
}
