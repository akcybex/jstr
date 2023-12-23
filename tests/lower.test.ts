import JStr from "../src/main.ts";

/**
 * Tests converting a string to lowercase.
 */

describe("JStr lower method", () => {
  // HeLLo
  test("JStr.of().lower() - converts a string to lowercase", () => {
    expect(JStr.of("HeLLo").lower().toString()).toBe("hello");
  });

  // heLLo
  test("JStr.of().lower() - converts a string to lowercase", () => {
    expect(JStr.of("heLLo").lower().toString()).toBe("hello");
  });

  // Space into lower
  test("JStr.of().lower() - converts a string to lowercase", () => {
    expect(JStr.of("").lower().toString()).toBe("");
  });

  // hELLO WorLd!
  test("JStr.of().lower() - converts a string to lowercase", () => {
    expect(JStr.of("hELLO WorLd!").lower().toString()).toBe("hello world!");
  });

  // HELLO WORLD!
  test("JStr.of().lower() - converts a string to lowercase", () => {
    expect(JStr.of("HELLO WORLD!").lower().toString()).toBe("hello world!");
  });
});
