import JStr from "../src/main.ts";

/**
 * The isUrl method determines if the given string is a valid URL
 */

describe("JStr isUrl static is method", () => {
    // find the Hello from string
    test("JStr.isUrl() - should return true when given value valid url", () => {
        expect(JStr.isUrl('http://example.com')).toBe(true);
    });

    test("JStr.isUrl() - should return false when given value not valid url", () => {
        expect(JStr.isUrl("beautifull")).toBe(false);
    });

    test("JStr.isUrl() - should return true when given value valid url https", () => {
        expect(JStr.isUrl("https://example.com")).toBe(true);
    });

    test("JStr.isUrl() - should return true when given value valid url www", () => {
        expect(JStr.isUrl("https://www.example.com")).toBe(true);
    });

    test("JStr.isUrl() - should return true when given url has slug /page", () => {
        expect(JStr.isUrl("https://www.example.com/page")).toBe(true);
    });
});


describe("JStr isUrl dynamic is method", () => {
    // find the Hello from string
    test("JStr.isUrl() - should return true when given value valid url", () => {
        expect(JStr.of('http://example.com').isUrl()).toBe(true);
    });

    test("JStr.isUrl() - should return false when given value not valid url", () => {
        expect(JStr.of("beautifull").isUrl()).toBe(false);
    });

    test("JStr.isUrl() - should return true when given value valid url https", () => {
        expect(JStr.of("https://example.com").isUrl()).toBe(true);
    });

    test("JStr.isUrl() - should return true when given value valid url www", () => {
        expect(JStr.of("https://www.example.com").isUrl()).toBe(true);
    });

    test("JStr.isUrl() - should return true when given url has slug /page", () => {
        expect(JStr.of("https://www.example.com/page").isUrl()).toBe(true);
    });
});


