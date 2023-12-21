import { jstr } from "../src/main.ts";

/**
 * The after method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe("JStr after method", () => {
  // HeLLo world with trim method
  test("jstr().after() - return world after the given Hello", () => {
    expect(jstr("Hello world").after("Hello").trim().toString()).toBe("world");
  });

  // HeLLo world
  test("jstr().after() - return world after the given Hello", () => {
    expect(jstr("Hello world").after("Hello").toString()).toBe(" world");
  });

  // if not word found after
  test("jstr().after() - return Hello world after the given Hello0", () => {
    expect(jstr("Hello world").after("Hello0").toString()).toBe("Hello world");
  });

  test("jstr().after() - return  my name after the given This is", () => {
    expect(jstr("This is my name").after("This is").toString()).toBe(
      " my name"
    );
  });

  test("jstr().after() - return jack after the given /", () => {
    expect(jstr("This is my name / jack").after("/").toString()).toBe(
      " jack"
    );
  });
});
