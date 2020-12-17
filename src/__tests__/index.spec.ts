import { hello } from '..'

test('says hello <name>', () => {
  expect(hello('world')).toBe('hello world')
})
