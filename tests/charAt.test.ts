import JStr from '../src/main.ts';

/**
 * The charAt method returns the character at the specified index. If the index is out of bounds, false is returned
 */

describe('JStr static charAt method', () => {

    test('JStr.charAt() - return l the given number', () => {
        expect(JStr.charAt('Hello world', 2)).toBe('l');
    });


    test('JStr.charAt() - return e the given number', () => {
        expect(JStr.charAt('Hello world', 1)).toBe('e');
    });


    test('JStr.charAt() - return H the given number', () => {
        expect(JStr.charAt('Hello world', 0)).toBe('H');
    });

    test('JStr.charAt() - return i charAt the given number', () => {
        expect(JStr.charAt('This is my name', 5)).toBe(
            'i',
        );
    });
    test('JStr.charAt() - return false if index not found the given number', () => {
        expect(JStr.charAt('This is my name', 40)).toBe(
            false,
        );
    });

});


describe('JStr dynamic charAt method', () => {

    test('JStr.charAt() - return l the given number', () => {
        expect(JStr.of('Hello world').charAt(2).toString()).toBe('l');
    });


    test('JStr.charAt() - return e the given number', () => {
        expect(JStr.of('Hello world').charAt(1).toString()).toBe('e');
    });


    test('JStr.charAt() - return H the given number', () => {
        expect(JStr.of('Hello world').charAt(0).toString()).toBe('H');
    });

    test('JStr.charAt() - return i charAt the given number', () => {
        expect(JStr.of('This is my name').charAt(5).toString()).toBe(
            'i',
        );
    });

    test('JStr.charAt() - return false if index not found the given number', () => {
        expect(JStr.of('This is my name').charAt(40).toString()).toBe(
            false,
        );
    });

});
