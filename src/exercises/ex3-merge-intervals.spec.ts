import { mergeIntervals } from './ex3-merge-intervals'

const input1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]

const input2 = [
  [2, 3],
  [5, 9],
  [6, 11],
  [15, 19],
  [16, 21]
]

// [2,3],  [5,11], [15,21]

describe('Merge intervals', () => {
  it('should merge overlapping intervals', () => {
    const output = mergeIntervals(input1)
    const r = mergeIntervals(input2)
    console.log(r)
    expect(output).toEqual([
      [1, 6],
      [8, 10],
      [15, 18]
    ])
    expect(r).toEqual([
      [2, 3],
      [5, 11],
      [15, 21]
    ])
  })

  it('should return empty array for empty input', () => {
    const input: number[][] = []
    const output = mergeIntervals(input)
    expect(output).toEqual([])
  })
  it('should handle single interval input', () => {
    const input = [[1, 3]]
    const output = mergeIntervals(input)
    expect(output).toEqual([[1, 3]])
  })
  it('should handle non-overlapping intervals', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    const output = mergeIntervals(input)
    expect(output).toEqual([
      [1, 2],
      [3, 4],
      [5, 6]
    ])
  })
})
