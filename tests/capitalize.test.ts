import JStr from "../src/main.ts";

/**
 * Tests converting a string to capitalize.
 */

describe("JStr capitalize method", () => {
  // HeLLo
  test("JStr.of().capitalize() - converts a string to capitalizecase", () => {
    expect(JStr.of("HeLLo").capitalize().toString()).toBe("Hello");
  });

  // heLLo
  test("JStr.of().capitalize() - converts a string to capitalizecase", () => {
    expect(JStr.of("heLLo").capitalize().toString()).toBe("Hello");
  });

  // Space into capitalize
  test("JStr.of().capitalize() - converts a string to capitalizecase", () => {
    expect(JStr.of("").capitalize().toString()).toBe("");
  });
  // HELLO WORLD!
  test("JStr.of().capitalize() - converts a string to capitalizecase", () => {
    expect(JStr.of("HELLO WORLD!").capitalize().toString()).toBe("Hello World!");
  });

  // hELLO WorLd!
  test("JStr.of().capitalize() - converts a string to capitalizecase", () => {
    expect(JStr.of("hELLO WorLd!").capitalize().toString()).toBe("Hello World!");
  });
});
