import { twoSumIndices } from './ex7-two-sum'

describe('twoSumIndices', () => {
  it('returns correct indices for example input', () => {
    expect(twoSumIndices([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('returns correct indices for another valid pair', () => {
    expect(twoSumIndices([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('returns correct indices when pair is at the end', () => {
    expect(twoSumIndices([1, 5, 3, 7], 10)).toEqual([2, 3])
  })

  it('returns correct indices when negative numbers are present', () => {
    expect(twoSumIndices([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })

  it('returns correct indices when numbers are repeated', () => {
    expect(twoSumIndices([3, 3], 6)).toEqual([0, 1])
  })

  it('returns empty array if no matches are found', () => {
    expect(twoSumIndices([1, 3, 4], 40)).toEqual([])
  })
  it('returns empty array if no matches are found', () => {
    expect(twoSumIndices([1], 40)).toEqual([])
  })
})
