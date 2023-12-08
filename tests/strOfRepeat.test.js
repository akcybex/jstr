const str = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
	expect(str.of('a').repeat(5)).toBe('aaaaa');
});
