import { deepClone, deepCloneArray } from './array-utils'

describe('deepClone', () => {
  it('creates a deep clone of an object', () => {
    const original = { a: 1, b: { c: 2 } }
    const cloned = deepClone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different object
    expect(cloned.b).not.toBe(original.b) // Ensure nested object is also cloned
  })

  it('creates a deep clone of an array', () => {
    const original = [1, 2, { a: 3 }]
    const cloned = deepClone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
    expect(cloned[2]).not.toBe(original[2]) // Ensure nested object is also cloned
  })
})

describe('deepCloneArray', () => {
  it('creates a deep clone of an array with primitive values', () => {
    const original = [1, 2, 3]
    const cloned = deepCloneArray(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
  })
  it('creates a deep clone of an array with objects', () => {
    const original = [{ a: 1 }, { b: 2 }]
    const cloned = deepCloneArray(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
    expect(cloned[0]).not.toBe(original[0]) // Ensure nested object is also cloned
  })
  it('creates a deep clone of an empty array', () => {
    const original: any[] = []
    const cloned = deepCloneArray(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
  })
  it('creates a deep clone of an array with mixed types', () => {
    const original = [1, 'two', { three: 3 }]
    const cloned = deepCloneArray(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
    expect(cloned[2]).not.toBe(original[2]) // Ensure nested object is also cloned
  })
  it('creates a deep clone of an array with nested arrays', () => {
    const original = [
      [1, 2],
      [3, 4]
    ]
    const cloned = deepCloneArray(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original) // Ensure it's a different array
    expect(cloned[0]).not.toBe(original[0]) // Ensure nested array is also cloned
  })
})
