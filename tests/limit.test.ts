import JStr from "../src/main.ts";

/**
 * The limit method truncates the given string to the specified length
 */

describe("JStr static limit method", () => {
    test("should return the limit of 10 characters string with dots at the end", () => {
        expect(JStr.limit("Lorem ipsum dolor sit amet", 10)).toBe("Lorem ipsu...");
    });

    test("should return the limit of 10 characters string with given third paramter asterisk at the end", () => {
        expect(JStr.limit("Lorem ipsum dolor sit amet", 10, '***')).toBe("Lorem ipsu***");
    });

    test("should return the default 100 characters limit string", () => {
        expect(JStr.limit("Lorem ipsum dolor sit amet")).toBe("Lorem ipsum dolor sit amet");
    });
});


describe("JStr dynamic limit method", () => {
    test("should return the limit of 10 characters string with dots at the end", () => {
        expect(JStr.of("Lorem ipsum dolor sit amet").limit(10).toString()).toBe("Lorem ipsu...");
    });

    test("should return the limit of 10 characters string with given third paramter asterisk at the end", () => {
        expect(JStr.of("Lorem ipsum dolor sit amet").limit(10, '***').toString()).toBe("Lorem ipsu***");
    });

    test("should return the default 100 characters limit string", () => {
        expect(JStr.of("Lorem ipsum dolor sit amet").limit().toString()).toBe("Lorem ipsum dolor sit amet");
    });
});