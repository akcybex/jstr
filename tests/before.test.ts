import JStr from "../src/main.ts";

/**
 * The before method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe("JStr static before method", () => {
    // HeLLo world with trim method
    test("JStr.before() - return world before the given Hello", () => {
        expect(JStr.before("Hello world", 'world').trim()).toBe("Hello");
    });

    // HeLLo world
    test("JStr.before() - return Hello before the given world", () => {
        expect(JStr.before("Hello world", 'world')).toBe("Hello ");
    });

    // if not word found before
    test("JStr.before() - return Hello world before the given Hello0", () => {
        expect(JStr.before("Hello world", 'Hello0')).toBe("Hello world");
    });

    test("JStr.before() - return  This is before the given my name", () => {
        expect(JStr.before("This is my name", 'my name')).toBe(
            "This is "
        );
    });

    test("JStr.before() - return This is my name  before the given /", () => {
        expect(JStr.before("This is my name / jack", '/')).toBe(
            "This is my name "
        );
    });

    //   with trim method
    test("JStr.of().before() - return This is my name  before the given /", () => {
        expect(JStr.before("This is my name / jack", '/').trim()).toBe(
            "This is my name"
        );
    });
});

describe("JStr dynamic before method", () => {
    // HeLLo world with trim method
    test("JStr.of().before() - return world before the given Hello", () => {
        expect(JStr.of("Hello world").before("world").toString()).toBe("Hello ");
    });

    // HeLLo world
    test("JStr.of().before() - return Hello before the given world", () => {
        expect(JStr.of("Hello world").before("world").toString()).toBe("Hello ");
    });

    // if not word found before
    test("JStr.of().before() - return Hello world before the given Hello0", () => {
        expect(JStr.of("Hello world").before("Hello0").toString()).toBe("Hello world");
    });

    test("JStr.of().before() - return  This is before the given my name", () => {
        expect(JStr.of("This is my name").before("my name").toString()).toBe(
            "This is "
        );
    });

    test("JStr.of().before() - return This is my name  before the given /", () => {
        expect(JStr.of("This is my name / jack").before("/").toString()).toBe(
            "This is my name "
        );
    });

    //   with trim method
    test("JStr.of().before() - return This is my name  before the given /", () => {
        expect(JStr.of("This is my name / jack").before("/").toString().trim()).toBe(
            "This is my name"
        );
    });
});
