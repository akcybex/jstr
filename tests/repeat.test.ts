import { jstr } from "../src/main.ts";

/**
 * Tests repeating a character multiple times.
 */

describe("JStr repeat method", () => {
  //   Character
  test("jstr().repeat() - repeats a character", () => {
    expect(jstr("a").repeat(3).toString()).toBe("aaa");
  });

  //   String
  test("jstr().repeat() - repeats hello world character", () => {
    expect(jstr("hello world").repeat(2).toString()).toBe(
      "hello worldhello world"
    );
  });

  //   Spaces
  test("jstr().repeat() - repeats '' character", () => {
    expect(jstr(" ").repeat(2).toString()).toBe("  ");
  });
});
