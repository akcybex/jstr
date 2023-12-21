import { jstr } from "../src/main.ts";

/**
 * Tests converting a string to lowercase.
 */

describe("JStr lower method", () => {
  // HeLLo
  test("jstr().lower() - converts a string to lowercase", () => {
    expect(jstr("HeLLo").lower().toString()).toBe("hello");
  });

  // heLLo
  test("jstr().lower() - converts a string to lowercase", () => {
    expect(jstr("heLLo").lower().toString()).toBe("hello");
  });

  // Space into lower
  test("jstr().lower() - converts a string to lowercase", () => {
    expect(jstr("").lower().toString()).toBe("");
  });

  // hELLO WorLd!
  test("jstr().lower() - converts a string to lowercase", () => {
    expect(jstr("hELLO WorLd!").lower().toString()).toBe("hello world!");
  });

  // HELLO WORLD!
  test("jstr().lower() - converts a string to lowercase", () => {
    expect(jstr("HELLO WORLD!").lower().toString()).toBe("hello world!");
  });
});
