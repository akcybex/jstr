import JStr from '../src/main.ts';

/**
 * The rtrim method trims the right side of the given string
 */

describe('JStr static rtrim method', () => {
    test('JStr.rtrim() - should remove leading whitespace by default', () => {
        expect(JStr.rtrim('hello    ')).toBe('hello');
    });
    test('JStr.rtrim() - should trim leading slashes by default', () => {
        expect(JStr.rtrim('/Beautiful/', '/')).toBe('/Beautiful');
    });

    test('JStr.rtrim() - should handle a string with only whitespace', () => {
        expect(JStr.rtrim('  ')).toBe('');
    });
    test('JStr.rtrim() - should trim leading spaces if specified', () => {
        expect(JStr.rtrim('   Hello   ')).toBe('   Hello');
    });
    test('JStr.rtrim() - should trim leading $ sign if specified', () => {
        expect(JStr.rtrim('$Hello$$$$$', '$')).toBe('$Hello');
    });


});

describe('JStr dynamic rtrim method', () => {
    test('JStr.rtrim() - should remove leading whitespace by default', () => {
        expect(JStr.of('hello   ').rtrim().toString()).toBe('hello');
    });
    test('JStr.rtrim() - should trim leading slashes by default', () => {
        expect(JStr.of('/Beautiful/').rtrim('/').ltrim('/').toString()).toBe('Beautiful');
    });

    test('JStr.rtrim() - should handle a string with only whitespace', () => {
        expect(JStr.of('  ').rtrim().toString()).toBe('');
    });
    test('JStr.rtrim() - should trim leading spaces if specified', () => {
        expect(JStr.of('   Hello   ').rtrim().toString()).toBe('   Hello');
    });
    test('JStr.rtrim() - should trim leading $ sign if specified', () => {
        expect(JStr.of('$Hello$$$$$').rtrim('$').toString()).toBe('$Hello');
    });


});


