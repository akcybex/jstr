import JStr from "../src/main.ts";

/**
 * Tests converting a string to first letter capital of each word.
 */

describe("JStr static title method", () => {
    // HeLLo
    test("JStr.title() -  HeLLo converts a string to first letter capital", () => {
        expect(JStr.title("HeLLo")).toBe("Hello");
    });

    // heLLo
    test("JStr.title() - heLLo world converts a string to first letter capital", () => {
        expect(JStr.title("heLLo world")).toBe("Hello World");
    });

    // Space into title
    test("JStr.title() - empty converts a string to first letter capital", () => {
        expect(JStr.title("")).toBe("");
    });

    // HELLO-WORLD!
    test("JStr.title() - HELLO WORLD! converts a string to first letter capital", () => {
        expect(JStr.title("HELLO WORLD!")).toBe("Hello World!");
    });

    // Email Notification Sent
    test("JStr.title() - converts a string to first letter capital", () => {
        expect(JStr.title("Email Notification Sent")).toBe("Email Notification Sent");
    });
});

describe("JStr dynamic title method", () => {
    // HeLLo
    test("JStr.of().title() - converts a string to first letter capital", () => {
        // console.log(JStr.of("HeLLo").title());
        expect(JStr.of("HeLLo").title().toString()).toBe("Hello");
    });
    //
    // heLLo
    test("JStr.of().title() - converts a string to first letter capital", () => {
        expect(JStr.of("heLLo world").title().toString()).toBe("Hello World");
    });

    // Space into title
    test("JStr.of().title() - converts a string to first letter capital", () => {
        expect(JStr.of("").title().toString()).toBe("");
    });
    // HELLO WORLD!
    test("JStr.of().title() - converts a string to first letter capital", () => {
        expect(JStr.of("HELLO WORLD!").title().toString()).toBe("Hello World!");
    });

});
