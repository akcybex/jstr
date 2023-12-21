import JStr from "../src/main.ts";

/**
 * Tests converting a string to uppercase.
 */

describe("JStr upper method", () => {
  // HeLLo
  test("JStr.of().upper() - converts a string to uppercase", () => {
    expect(JStr.of("HeLLo").upper().toString()).toBe("HELLO");
  });

  // heLLo
  test("JStr.of().upper() - converts a string to uppercase", () => {
    expect(JStr.of("heLLo").upper().toString()).toBe("HELLO");
  });

  // Space into upper
  test("JStr.of().upper() - converts a string to uppercase", () => {
    expect(JStr.of("").upper().toString()).toBe("");
  });

  // hELLO WorLd!
  test("JStr.of().upper() - converts a string to uppercase", () => {
    expect(JStr.of("hELLO WorLd!").upper().toString()).toBe("HELLO WORLD!");
  });

  // HELLO WORLD!
  test("JStr.of().upper() - converts a string to uppercase", () => {
    expect(JStr.of("hello world!").upper().toString()).toBe("HELLO WORLD!");
  });
});
