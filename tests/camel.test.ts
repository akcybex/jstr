import { jstr } from "../src/main.ts";

/**
 * The camel method converts the given string to camelCase:
 */

describe("JStr camel method", () => {
  // foo_bar
  test("jstr().camel() - return foo_bar camelcase", () => {
    expect(jstr("foo_bar").camel().toString()).toBe("fooBar");
  });

  // foo bar
  test("jstr().camel() - return foo bar camelcase", () => {
    expect(jstr("foo bar").camel().toString()).toBe("fooBar");
  });

  // hello dear world
  test("jstr().camel() - return foo bar camelcase", () => {
    expect(jstr("hello dear world").camel().toString()).toBe("helloDearWorld");
  });

  // snake_case_string
  test("jstr().camel() - return snake_case_string camelcase", () => {
    expect(jstr("snake_case_string").camel().toString()).toBe(
      "snakeCaseString"
    );
  });

  // snake_case_string
  test("jstr().camel() - return kebab-case-string camelcase", () => {
    expect(jstr("kebab-case-string").camel().toString()).toBe(
      "kebabCaseString"
    );
  });
});
