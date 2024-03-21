import JStr from "../src/main.ts";

/**
 * The singular method converts the given string to singular:
 */

describe('singular JStr static function', () => {
    test('should call singular with the provided value', () => {
        const input = 'dogs';
        expect(JStr.singular(input)).toBe('dog');
    });
    test('should singular with the men value', () => {
        const input = 'men';
        expect(JStr.singular(input)).toBe('man');
    });

    test('should singular with the Crocodiles value', () => {
        const input = 'Crocodiles';
        expect(JStr.singular(input)).toBe('Crocodile');
    });

    test('should singular ies plural with the Babies value', () => {
        const input = 'Babies';
        expect(JStr.singular(input)).toBe('Baby');
    });

    test('should singular ies plural with the Rallies value', () => {
        const input = 'Rallies';
        expect(JStr.singular(input)).toBe('Rally');
    });

    test('should singular with the Knives value', () => {
        const input = 'Knives';
        expect(JStr.singular(input)).toBe('Knife');
    });
    test('should singular with the Leaves value', () => {
        const input = 'Leaves';
        expect(JStr.singular(input)).toBe('Leaf');
    });

    test('should singular with the Children value', () => {
        const input = 'Children';
        expect(JStr.singular(input)).toBe('Child');
    });
    test('should singular with the Feet value', () => {
        const input = 'Feet';
        expect(JStr.singular(input)).toBe('Foot');
    });

    test('should singular with the Fish value', () => {
        const input = 'Fish';
        expect(JStr.singular(input)).toBe('Fish');
    });



});

describe('singular JStr dynamic function', () => {
    test('should call singular with the provided value', () => {
        const input = 'dogs';
        expect(JStr.of(input).singular().toString()).toBe('dog');
    });
    test('should singular with the men value', () => {
        const input = 'men';
        expect(JStr.of(input).singular().toString()).toBe('man');
    });

    test('should singular with the Crocodiles value', () => {
        const input = 'Crocodiles';
        expect(JStr.of(input).singular().toString()).toBe('Crocodile');
    });

    test('should singular ies plural with the Babies value', () => {
        const input = 'Babies';
        expect(JStr.of(input).singular().toString()).toBe('Baby');
    });

    test('should singular ies plural with the Rallies value', () => {
        const input = 'Rallies';
        expect(JStr.of(input).singular().toString()).toBe('Rally');
    });

    test('should singular with the Knives value', () => {
        const input = 'Knives';
        expect(JStr.of(input).singular().toString()).toBe('Knife');
    });
    test('should singular with the Leaves value', () => {
        const input = 'Leaves';
        expect(JStr.of(input).singular().toString()).toBe('Leaf');
    });

    test('should singular with the Children value', () => {
        const input = 'Children';
        expect(JStr.of(input).singular().toString()).toBe('Child');
    });
    test('should singular with the Feet value', () => {
        const input = 'Feet';
        expect(JStr.of(input).singular().toString()).toBe('Foot');
    });

    test('should singular with the Fish value', () => {
        const input = 'Fish';
        expect(JStr.of(input).singular().toString()).toBe('Fish');
    });



});
