import JStr from '../src/main.ts';

/**
 * The isEmpty method determines if the given string is empty
 */

describe('JStr dynamic isEmpty method', () => {
	test('should return true for an empty string', () => {
		expect(JStr.of('  ').squish().isEmpty()).toBe(true);

	});

    test('should return true for an empty string', () => {
        expect(JStr.of('  ').trim().isEmpty()).toBe(true);

    });

    test('should return false for an non-empty string', () => {
        expect(JStr.of('hello').isEmpty()).toBe(false);
    });

    test('should return false for an empty string with spaces', () => {
        expect(JStr.of('   ').isEmpty()).toBe(false);
    });

    test('should return true for an empty string with tabs and newlines', () => {
        expect(JStr.of('\t\n').isEmpty()).toBe(false);
    });
});







