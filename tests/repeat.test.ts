import JStr from "../src/main.ts";

/**
 * Tests repeating a character multiple times.
 */

describe("JStr repeat method", () => {
  //   Character
  test("JStr.of().repeat() - repeats a character", () => {
    expect(JStr.of("a").repeat(3).toString()).toBe("aaa");
  });

  //   String
  test("JStr.of().repeat() - repeats hello world character", () => {
    expect(JStr.of("hello world").repeat(2).toString()).toBe(
      "hello worldhello world"
    );
  });

  //   Spaces
  test("JStr.of().repeat() - repeats '' character", () => {
    expect(JStr.of(" ").repeat(2).toString()).toBe("  ");
  });
});
