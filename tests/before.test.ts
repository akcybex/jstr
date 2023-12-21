import { jstr } from "../src/main.ts";

/**
 * The before method returns everything before the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe("JStr before method", () => {
  // HeLLo world with trim method
  test("jstr().before() - return world before the given Hello", () => {
    expect(jstr("Hello world").before("world").trim().toString()).toBe("Hello");
  });

  // HeLLo world
  test("jstr().before() - return Hello before the given world", () => {
    expect(jstr("Hello world").before("world").toString()).toBe("Hello ");
  });

  // if not word found before
  test("jstr().before() - return Hello world before the given Hello0", () => {
    expect(jstr("Hello world").before("Hello0").toString()).toBe("Hello world");
  });

  test("jstr().before() - return  This is before the given my name", () => {
    expect(jstr("This is my name").before("my name").toString()).toBe(
      "This is "
    );
  });

  test("jstr().before() - return This is my name  before the given /", () => {
    expect(jstr("This is my name / jack").before("/").toString()).toBe(
      "This is my name "
    );
  });

  //   with trim method
  test("jstr().before() - return This is my name  before the given /", () => {
    expect(jstr("This is my name / jack").before("/").trim().toString()).toBe(
      "This is my name"
    );
  });
});
