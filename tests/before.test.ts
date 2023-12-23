import JStr from "../src/main.ts";

/**
 * The before method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe("JStr before method", () => {
  // HeLLo world with trim method
  test("JStr.of().before() - return world before the given Hello", () => {
    expect(JStr.of("Hello world").before("world").trim().toString()).toBe("Hello");
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
    expect(JStr.of("This is my name / jack").before("/").trim().toString()).toBe(
      "This is my name"
    );
  });
});
