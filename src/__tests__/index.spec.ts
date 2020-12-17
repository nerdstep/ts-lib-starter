import { hello } from '../index'

test('says hello <name>', () => {
  expect(hello('world')).toBe('hello world')
})
