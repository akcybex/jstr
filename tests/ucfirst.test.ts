import JStr from "../src/main.ts";

/**
 * Tests converting a string to first letter capital.
 */

describe("JStr static ucfirst method", () => {
    // HeLLo
    test("JStr.ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.ucfirst("HeLLo")).toBe("HeLLo");
    });

    // heLLo
    test("JStr.ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.ucfirst("heLLo")).toBe("HeLLo");
    });

    // Space into ucfirst
    test("JStr.ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.ucfirst("")).toBe("");
    });
    // HELLO WORLD!
    test("JStr.ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.ucfirst("HELLO WORLD!")).toBe("HELLO WORLD!");
    });

    // hELLO WorLd!
    test("JStr.ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.ucfirst("hELLO WorLd!")).toBe("HELLO WorLd!");
    });
});

describe("JStr dynamic ucfirst method", () => {
    // HeLLo
    test("JStr.of().ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.of("HeLLo").ucfirst().toString()).toBe("HeLLo");
    });

    // heLLo
    test("JStr.of().ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.of("heLLo").ucfirst().toString()).toBe("HeLLo");
    });

    // Space into ucfirst
    test("JStr.of().ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.of("").ucfirst().toString()).toBe("");
    });
    // HELLO WORLD!
    test("JStr.of().ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.of("HELLO WORLD!").ucfirst().toString()).toBe("HELLO WORLD!");
    });

    // hELLO WorLd!
    test("JStr.of().ucfirst() - converts a string to first letter capital", () => {
        expect(JStr.of("hELLO WorLd!").ucfirst().toString()).toBe("HELLO WorLd!");
    });
});
