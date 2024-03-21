import JStr from "../src/main.ts";

/**
 * The plural method converts the given string to plural:
 */

describe('plural JStr static function', () => {
    test('should call plural with the provided value', () => {
        const input = 'dog';
        expect(JStr.plural(input)).toBe('dogs');
    });
    test('should plural with the men value', () => {
        const input = 'man';
        expect(JStr.plural(input)).toBe('men');
    });

    test('should plural with the Crocodile value', () => {
        const input = 'Crocodile';
        expect(JStr.plural(input)).toBe('Crocodiles');
    });

    test('should plural ies plural with the Baby value', () => {
        const input = 'Baby';
        expect(JStr.plural(input)).toBe('Babies');
    });

    test('should plural ies plural with the Rally value', () => {
        const input = 'Rally';
        expect(JStr.plural(input)).toBe('Rallies');
    });

    test('should plural with the Knife value', () => {
        const input = 'Knife';
        expect(JStr.plural(input)).toBe('Knives');
    });
    test('should plural with the Leaf value', () => {
        const input = 'Leaf';
        expect(JStr.plural(input)).toBe('Leaves');
    });

    test('should plural with the Child value', () => {
        const input = 'Child';
        expect(JStr.plural(input)).toBe('Children');
    });
    test('should plural with the Foot value', () => {
        const input = 'Foot';
        expect(JStr.plural(input)).toBe('Feet');
    });

    test('should plural with the Fish value', () => {
        const input = 'Fish';
        expect(JStr.plural(input)).toBe('Fish');
    });



});

describe('plural JStr dynamic function', () => {
    test('should call plural with the provided value', () => {
        const input = 'dog';
        expect(JStr.of(input).plural().toString()).toBe('dogs');
    });
    test('should plural with the men value', () => {
        const input = 'man';
        expect(JStr.of(input).plural().toString()).toBe('men');
    });

    test('should plural with the Crocodile value', () => {
        const input = 'Crocodile';
        expect(JStr.of(input).plural().toString()).toBe('Crocodiles');
    });

    test('should plural ies plural with the Baby value', () => {
        const input = 'Baby';
        expect(JStr.of(input).plural().toString()).toBe('Babies');
    });

    test('should plural ies plural with the Rally value', () => {
        const input = 'Rally';
        expect(JStr.of(input).plural().toString()).toBe('Rallies');
    });

    test('should plural with the Knife value', () => {
        const input = 'Knife';
        expect(JStr.of(input).plural().toString()).toBe('Knives');
    });
    test('should plural with the Leaf value', () => {
        const input = 'Leaf';
        expect(JStr.of(input).plural().toString()).toBe('Leaves');
    });

    test('should plural with the Child value', () => {
        const input = 'Child';
        expect(JStr.of(input).plural().toString()).toBe('Children');
    });
    test('should plural with the Foot value', () => {
        const input = 'Foot';
        expect(JStr.of(input).plural().toString()).toBe('Feet');
    });

    test('should plural with the Fish value', () => {
        const input = 'Fish';
        expect(JStr.of(input).plural().toString()).toBe('Fish');
    });



});
