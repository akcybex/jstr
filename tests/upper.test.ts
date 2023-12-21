import { jstr } from "../src/main.ts";

/**
 * Tests converting a string to uppercase.
 */

describe("JStr upper method", () => {
  // HeLLo
  test("jstr().upper() - converts a string to uppercase", () => {
    expect(jstr("HeLLo").upper().toString()).toBe("HELLO");
  });

  // heLLo
  test("jstr().upper() - converts a string to uppercase", () => {
    expect(jstr("heLLo").upper().toString()).toBe("HELLO");
  });

  // Space into upper
  test("jstr().upper() - converts a string to uppercase", () => {
    expect(jstr("").upper().toString()).toBe("");
  });

  // hELLO WorLd!
  test("jstr().upper() - converts a string to uppercase", () => {
    expect(jstr("hELLO WorLd!").upper().toString()).toBe("HELLO WORLD!");
  });

  // HELLO WORLD!
  test("jstr().upper() - converts a string to uppercase", () => {
    expect(jstr("hello world!").upper().toString()).toBe("HELLO WORLD!");
  });
});
