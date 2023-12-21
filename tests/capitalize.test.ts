import { jstr } from "../src/main.ts";

/**
 * Tests converting a string to capitalize.
 */

describe("JStr capitalize method", () => {
  // HeLLo
  test("jstr().capitalize() - converts a string to capitalizecase", () => {
    expect(jstr("HeLLo").capitalize().toString()).toBe("Hello");
  });

  // heLLo
  test("jstr().capitalize() - converts a string to capitalizecase", () => {
    expect(jstr("heLLo").capitalize().toString()).toBe("Hello");
  });

  // Space into capitalize
  test("jstr().capitalize() - converts a string to capitalizecase", () => {
    expect(jstr("").capitalize().toString()).toBe("");
  });
  // HELLO WORLD!
  test("jstr().capitalize() - converts a string to capitalizecase", () => {
    expect(jstr("HELLO WORLD!").capitalize().toString()).toBe("Hello World!");
  });

  // hELLO WorLd!
  test("jstr().capitalize() - converts a string to capitalizecase", () => {
    expect(jstr("hELLO WorLd!").capitalize().toString()).toBe("Hello World!");
  });
});
