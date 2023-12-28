import JStr from "../src/main.ts";

/**
 * Tests converting a string to uppercase.
 */

describe("JStr static upper method", () => {
    // HeLLo
    test("JStr.upper().upper() - converts a string to uppercase", () => {
        expect(JStr.upper("HeLLo")).toBe("HELLO");
    });

    // heLLo
    test("JStr.upper().upper() - converts a string to uppercase", () => {
        expect(JStr.upper("heLLo")).toBe("HELLO");
    });

    // Space into upper
    test("JStr.upper().upper() - converts a string to uppercase", () => {
        expect(JStr.upper("")).toBe("");
    });

    // hELLO WorLd!
    test("JStr.upper().upper() - converts a string to uppercase", () => {
        expect(JStr.upper("hELLO WorLd!")).toBe("HELLO WORLD!");
    });

    // HELLO WORLD!
    test("JStr.upper().upper() - converts a string to uppercase", () => {
        expect(JStr.upper("hello world!")).toBe("HELLO WORLD!");
    });
});

describe("JStr dynamic upper method", () => {
    // HeLLo
    test("JStr.of().upper() - converts a string to uppercase", () => {
        expect(JStr.of("HeLLo").upper().toString()).toBe("HELLO");
    });

    // heLLo
    test("JStr.of().upper() - converts a string to uppercase", () => {
        expect(JStr.of("heLLo").upper().toString()).toBe("HELLO");
    });

    // Space into upper
    test("JStr.of().upper() - converts a string to uppercase", () => {
        expect(JStr.of("").upper().toString()).toBe("");
    });

    // hELLO WorLd!
    test("JStr.of().upper() - converts a string to uppercase", () => {
        expect(JStr.of("hELLO WorLd!").upper().toString()).toBe("HELLO WORLD!");
    });

    // HELLO WORLD!
    test("JStr.of().upper() - converts a string to uppercase", () => {
        expect(JStr.of("hello world!").upper().toString()).toBe("HELLO WORLD!");
    });
});
