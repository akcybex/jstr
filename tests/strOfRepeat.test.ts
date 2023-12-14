import str from "../src/main.ts";

test('Str.of().repeat', () => {
	expect(str.of('a').repeat(5)).toBe('aaaaa');
});
