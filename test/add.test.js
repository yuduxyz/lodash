import add from '../add'

test('add', () => {
  expect(add()).toBe(0)
  expect(add(1, 0)).toBe(1)
  expect(add(1)).toBe(1)
  expect(add(1, '19')).toBe('119')
  expect(add(1, { a: 12 })).toBe(NaN)
})
