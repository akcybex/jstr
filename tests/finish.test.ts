import JStr from "../src/main.ts";

/**
 * The finish method adds a single instance of the given value to a string if it does not already end with that value
 */

describe("JStr static finish method", () => {
    // find the Hello from string
    test("should return the string with cap added at the end", () => {
        expect(JStr.finish("Hello", " world")).toBe("Hello world");
    });

    test("JStr.finish() - should return the string with a single instance of cap at the end", () => {
        expect(JStr.finish("Hello world", "world")).toBe("Hello world");
    });
    test("JStr.finish() - should return the string with cap added at the end", () => {
        expect(JStr.finish("this/string", "/")).toBe("this/string/");
    });
    test("JStr.finish() - should return the string with a single instance of cap at the end", () => {
        expect(JStr.finish("this/string/", "/")).toBe("this/string/");
    });
});

describe("JStr dynamic finish method", () => {
    // find the Hello from string
    test("should return the string with cap added at the end", () => {
        expect(JStr.of("Hello").finish(" world").toString()).toBe("Hello world");
    });

    test("JStr.finish() - should return the string with a single instance of cap at the end", () => {
        expect(JStr.of("Hello world").finish("world").toString()).toBe("Hello world");
    });
    test("JStr.finish() - should return the string with cap added at the end", () => {
        expect(JStr.of("this/string").finish("/").toString()).toBe("this/string/");
    });
    test("JStr.finish() - should return the string with a single instance of cap at the end", () => {
        expect(JStr.of("this/string/").finish("/").toString()).toBe("this/string/");
    });
});