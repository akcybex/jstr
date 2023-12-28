import JStr from "../src/main.ts";

/**
 * Tests repeating a character multiple times.
 */

describe("JStr static repeat method", () => {
    //   Character
    test("JStr.repeat() - repeats a character", () => {
        expect(JStr.repeat("a", 3)).toBe("aaa");
    });

    //   String
    test("JStr.repeat() - repeats hello world character", () => {
        expect(JStr.repeat("hello world", 2)).toBe(
            "hello worldhello world"
        );
    });

    //   Spaces
    test("JStr.repeat() - repeats '' character", () => {
        expect(JStr.repeat(" ", 2)).toBe("  ");
    });
});

describe("JStr dynamic repeat method", () => {
    //   Character
    test("JStr.of().repeat() - repeats a character", () => {
        expect(JStr.of("a").repeat(3).toString()).toBe("aaa");
    });

    //   String
    test("JStr.of().repeat() - repeats hello world character", () => {
        expect(JStr.of("hello world").repeat(2).toString()).toBe(
            "hello worldhello world"
        );
    });

    //   Spaces
    test("JStr.of().repeat() - repeats '' character", () => {
        expect(JStr.of(" ").repeat(2).toString()).toBe("  ");
    });
});
