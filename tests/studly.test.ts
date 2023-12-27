import JStr from "../src/main.ts";

/**
 * The studly method converts the given string to StudlyCase:
 */

describe("JStr static studly method", () => {
    // foo_bar
    test("JStr.studly() - return foo_bar StudlyCase", () => {
        expect(JStr.studly("foo_bar")).toBe("FooBar");
    });

    // foo bar
    test("JStr.studly() - return foo bar StudlyCase", () => {
        expect(JStr.studly("foo bar")).toBe("FooBar");
    });

    // hello dear world
    test("JStr.studly() - return hello dear world in StudlyCase", () => {
        expect(JStr.studly("hello dear world")).toBe("HelloDearWorld");
    });

    // snake_case_string
    test("JStr.studly() - return snake_case_string StudlyCase", () => {
        expect(JStr.studly("snake_case_string")).toBe(
            "SnakeCaseString"
        );
    });

    // chain-case-string
    test("JStr.studly() - return kebab-case-string studlycase", () => {
        expect(JStr.studly("kebab-case-string")).toBe(
            "KebabCaseString"
        );
    });
});

describe("JStr dynamic studly method", () => {
    // foo_bar
    test("JStr.of().studly() - return foo_bar StudlyCase", () => {
        expect(JStr.of("foo_bar").studly().toString()).toBe("FooBar");
    });

    // foo bar
    test("JStr.of().studly() - return foo bar StudlyCase", () => {
        expect(JStr.of("foo bar").studly().toString()).toBe("FooBar");
    });

    // hello dear world
    test("JStr.of().studly() - return hello dear world in StudlyCase", () => {
        expect(JStr.of("hello dear world").studly().toString()).toBe("HelloDearWorld");
    });

    // snake_case_string
    test("JStr.of().studly() - return snake_case_string StudlyCase", () => {
        expect(JStr.of("snake_case_string").studly().toString()).toBe(
            "SnakeCaseString"
        );
    });

    // snake_case_string
    test("JStr.of().studly() - return kebab-case-string studlycase", () => {
        expect(JStr.of("kebab-case-string").studly().toString()).toBe(
            "KebabCaseString"
        );
    });
});
