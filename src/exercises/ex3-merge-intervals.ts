/**
 * Given an array of intervals where intervals `[i] = [start_i, end_i]`, merge all overlapping intervals.
 *
 * > Input: `[[1,3],[2,6],[8,10],[15,18]]`
 * > Output: `[[1,6],[8,10],[15,18]]`
 */

function findOverlap(a: number[], b: number[]): boolean {
  return a[1] >= b[0]
}

export function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals
  }
  const newIntervals = []
  let currentInterval = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i]
    if (findOverlap(currentInterval, nextInterval)) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    } else {
      newIntervals.push(currentInterval)
      currentInterval = nextInterval
    }
  }
  newIntervals.push(currentInterval)
  return newIntervals
}
