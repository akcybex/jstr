import JStr from "../src/main.ts";

/**
 * Tests converting a string to first letter capital of each word.
 */

describe("JStr static capitalize method", () => {
    // HeLLo
    test("JStr.capitalize() -  HeLLo converts a string to first letter capital", () => {
        expect(JStr.capitalize("HeLLo")).toBe("Hello");
    });

    // heLLo
    test("JStr.capitalize() - heLLo world converts a string to first letter capital", () => {
        expect(JStr.capitalize("heLLo world")).toBe("Hello World");
    });

    // Space into capitalize
    test("JStr.capitalize() - empty converts a string to first letter capital", () => {
        expect(JStr.capitalize("")).toBe("");
    });

    // HELLO-WORLD!
    test("JStr.capitalize() - HELLO WORLD! converts a string to first letter capital", () => {
        expect(JStr.capitalize("HELLO WORLD!")).toBe("Hello World!");
    });

    // Email Notification Sent
    test("JStr.capitalize() - converts a string to first letter capital", () => {
        expect(JStr.capitalize("Email Notification Sent")).toBe("Email Notification Sent");
    });
});

describe("JStr dynamic capitalize method", () => {
    // HeLLo
    test("JStr.of().capitalize() - converts a string to first letter capital", () => {
        // console.log(JStr.of("HeLLo").capitalize());
        expect(JStr.of("HeLLo").capitalize().toString()).toBe("Hello");
    });
    //
    // heLLo
    test("JStr.of().capitalize() - converts a string to first letter capital", () => {
        expect(JStr.of("heLLo world").capitalize().toString()).toBe("Hello World");
    });

    // Space into capitalize
    test("JStr.of().capitalize() - converts a string to first letter capital", () => {
        expect(JStr.of("").capitalize().toString()).toBe("");
    });
    // HELLO WORLD!
    test("JStr.of().capitalize() - converts a string to first letter capital", () => {
        expect(JStr.of("HELLO WORLD!").capitalize().toString()).toBe("Hello World!");
    });

});
