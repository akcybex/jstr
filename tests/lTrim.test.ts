import JStr from '../src/main.ts';

/**
 * The ltrim method trims the left side of the string
 */

describe('JStr static ltrim method', () => {
    test('JStr.ltrim() - should remove leading whitespace by default', () => {
        expect(JStr.ltrim('   hello')).toBe('hello');
    });
    test('JStr.ltrim() - should trim leading slashes by default', () => {
        expect(JStr.ltrim('/Beautiful/', '/')).toBe('Beautiful/');
    });

    test('JStr.ltrim() - should handle a string with only whitespace', () => {
        expect(JStr.ltrim('  ')).toBe('');
    });
    test('JStr.ltrim() - should trim leading spaces if specified', () => {
        expect(JStr.ltrim('   Hello   ')).toBe('Hello   ');
    });
    test('JStr.ltrim() - should trim leading $ sign if specified', () => {
        expect(JStr.ltrim('$$$$$Hello$', '$')).toBe('Hello$');
    });


});

describe('JStr dynamic ltrim method', () => {
    test('JStr.ltrim() - should remove leading whitespace by default', () => {
        expect(JStr.of('   hello').ltrim().toString()).toBe('hello');
    });
    test('JStr.ltrim() - should trim leading slashes by default', () => {
        expect(JStr.of('/Beautiful/').ltrim('/').toString()).toBe('Beautiful/');
    });

    test('JStr.ltrim() - should handle a string with only whitespace', () => {
        expect(JStr.of('  ').ltrim().toString()).toBe('');
    });
    test('JStr.ltrim() - should trim leading spaces if specified', () => {
        expect(JStr.of('   Hello   ').ltrim().toString()).toBe('Hello   ');
    });
    test('JStr.ltrim() - should trim leading $ sign if specified', () => {
        expect(JStr.of('$$$$$Hello$').ltrim('$').toString()).toBe('Hello$');
    });


});


