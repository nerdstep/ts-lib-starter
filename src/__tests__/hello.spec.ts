import { hello } from '../hello'

test('says hello <name>', () => {
  expect(hello('world')).toBe('hello world')
})
