import JStr from '../src/main.ts';

/**
 * The kebab method converts the given string to kebab-case
 */

describe('JStr static kebab method', () => {
    test('JStr.kebab() - covert into foo-bar', () => {
        expect(JStr.kebab('fooBar')).toBe('foo-bar');
    });

    test('JStr.kebab() - covert into foo-bar', () => {
        expect(JStr.kebab('FooBar')).toBe('foo-bar');
    });

    test('JStr.kebab() - covert into hello-world', () => {
        expect(JStr.kebab('Hello world')).toBe('hello-world');
    });
});

describe('JStr dynamic kebab method', () => {
    test('JStr.kebab() - covert into foo-bar', () => {
        expect(JStr.of('fooBar').kebab().toString()).toBe('foo-bar');
    });

    test('JStr.kebab() - covert into foo-bar', () => {
        expect(JStr.of('FooBar').kebab().toString()).toBe('foo-bar');
    });

    test('JStr.kebab() - covert into hello-world', () => {
        expect(JStr.of('Hello world').kebab().toString()).toBe('hello-world');
    });
});
