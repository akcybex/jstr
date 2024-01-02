import JStr from "../src/main.ts";

/**
 * The is method determines if a given string matches a given pattern. Asterisks may be used as wildcard values
 */

describe("JStr static is method", () => {
    // find the Hello from string
    test("JStr.is() - should return true when a single pattern matches the value", () => {
        const pattern = 'foo*';
        const value = 'foobar';
        expect(JStr.is(pattern, value)).toBe(true);
    });

	test("JStr.is() - should return false when a single pattern matches the value", () => {
		const pattern = 'baz*';
		const value = 'foobar';
		expect(JStr.is(pattern, value)).toBe(false);
	});
});

