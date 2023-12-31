import JStr from "../src/main.ts";

/**
 * The camel method converts the given string to camelCase:
 */

describe("JStr dynamic camel method", () => {
    // foo_bar
    test("JStr.of().camel() - return foo_bar camelcase", () => {
        expect(JStr.camel("foo_bar")).toBe("fooBar");
    });

    // foo bar
    test("JStr.of().camel() - return foo bar camelcase", () => {
        expect(JStr.camel("foo bar")).toBe("fooBar");
    });

    // hello dear world
    test("JStr.of().camel() - return foo bar camelcase", () => {
        expect(JStr.camel("hello dear world")).toBe("helloDearWorld");
    });

    // snake_case_string
    test("JStr.of().camel() - return snake_case_string camelcase", () => {
        expect(JStr.camel("snake_case_string")).toBe(
            "snakeCaseString"
        );
    });

    // chain-case-string
    test("JStr.of().camel() - return kebab-case-string camelcase", () => {
        expect(JStr.of("kebab-case-string").camel().toString()).toBe(
            "kebabCaseString"
        );
    });
});

describe("JStr dynamic camel method", () => {
    // foo_bar
    test("JStr.of().camel() - return foo_bar camelcase", () => {
        expect(JStr.of("foo_bar").camel().toString()).toBe("fooBar");
    });

    // foo bar
    test("JStr.of().camel() - return foo bar camelcase", () => {
        expect(JStr.of("foo bar").camel().toString()).toBe("fooBar");
    });

    // hello dear world
    test("JStr.of().camel() - return foo bar camelcase", () => {
        expect(JStr.of("hello dear world").camel().toString()).toBe("helloDearWorld");
    });

    // snake_case_string
    test("JStr.of().camel() - return snake_case_string camelcase", () => {
        expect(JStr.of("snake_case_string").camel().toString()).toBe(
            "snakeCaseString"
        );
    });

    // chain-case-string
    test("JStr.of().camel() - return kebab-case-string camelcase", () => {
        expect(JStr.of("kebab-case-string").camel().toString()).toBe(
            "kebabCaseString"
        );
    });
});
