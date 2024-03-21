import JStr from "../src/main.ts";

/**
 * The pluralStudly method converts a singular word string formatted in studly caps case to its plural form
 */

describe('plural JStr static function', () => {
    test('should call plural with the provided value', () => {
        const input = 'dogcat';
        expect(JStr.pluralStudly(input)).toBe('dogcats');
    });
    test('should plural with the men value', () => {
        const input = 'manwoman';
        expect(JStr.plural(input)).toBe('manwomen');
    });

    test('should plural of the dog value', () => {
        const input = 'catdog';
        expect(JStr.pluralStudly(input)).toBe('catdogs');
    });

    test('should plural ies plural with the Baby value', () => {
        const input = 'Babyboy';
        expect(JStr.plural(input)).toBe('Babyboys');
    });

    test('should plural with the Knife value', () => {
        const input = 'forkKnife';
        expect(JStr.plural(input)).toBe('forkKnives');
    });

});

describe('plural JStr dynamic function', () => {
    test('should call plural with the provided value', () => {
        const input = 'dogcat';
        expect(JStr.of(input).pluralStudly().toString()).toBe('dogcats');
    });
    test('should plural with the men value', () => {
        const input = 'manwoman';
        expect(JStr.of(input).pluralStudly().toString()).toBe('manwomen');
    });

    test('should plural of the dog value', () => {
        const input = 'catdog';
        expect(JStr.of(input).pluralStudly().toString()).toBe('catdogs');
    });

    test('should plural ies plural with the Baby value', () => {
        const input = 'Babyboy';
        expect(JStr.of(input).pluralStudly().toString()).toBe('Babyboys');
    });

    test('should plural with the Knife value', () => {
        const input = 'forkKnife';
        expect(JStr.of(input).pluralStudly().toString()).toBe('`forkKnives`');
    });

});

