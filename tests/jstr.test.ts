import { jstr } from "../src/main.ts";

describe("JStr plural method", () => {
  test('should pluralize words ending with "y" correctly', () => {
    const result = jstr("study").plural().toString();
    expect(result).toBe("studies");
  });

  test('should add "s" for basic pluralization', () => {
    const result = jstr("apple").plural().toString();
    expect(result).toBe("apples");
  });

  // Add more test cases as needed
});

describe("JStr singular method", () => {
  test('should singular words ending with "ies" correctly', () => {
    const result = jstr("studies").singular().toString();
    expect(result).toBe("study");
  });

  test('should remove "s" for basic singularization', () => {
    const result = jstr("apples").singular().toString();
    expect(result).toBe("apple");
  });

  // Add more test cases as needed
});

/**
 * Tests for the JStr class.
 */
describe("JStr class tests", () => {
  /**
   * Tests repeating a character multiple times.
   */
  test("jstr().repeat() - repeats a character", () => {
    expect(jstr("a").repeat(3).toString()).toBe("aaa");
  });

  /**
   * Tests repeating a character multiple times and converting to uppercase.
   */
  test("jstr().repeat().upper() - repeats a character and converts to uppercase", () => {
    expect(jstr("a").repeat(3).upper().toString()).toBe("AAA");
  });

  /**
   * Tests repeating a character multiple times and converting to lowercase.
   */
  test("jstr().repeat().lower() - repeats a character and converts to lowercase", () => {
    expect(jstr("A").repeat(3).lower().toString()).toBe("aaa");
  });

  /**
   * Tests repeating a character multiple times and capitalizing the first letter.
   */
  test("jstr().repeat().capitalize() - repeats a character and capitalizes the first letter", () => {
    expect(jstr("a").repeat(3).capitalize().toString()).toBe("Aaa");
  });

  /**
   * Tests capitalizing the first letter of each word in a string.
   */
  test("jstr().capitalize() - capitalizes the first letter of each word", () => {
    expect(jstr("hello world").capitalize().toString()).toBe("Hello World");
  });

  /**
   * Tests handling of empty strings.
   */
  test("jstr() with empty string", () => {
    expect(jstr("").repeat(3).upper().toString()).toBe("");
  });

  /**
   * Tests direct toString() call without any string manipulation.
   */
  test("jstr().toString() - direct toString() call without manipulation", () => {
    expect(jstr("hello").toString()).toBe("hello");
  });

  /**
   * Tests chaining multiple string manipulation operations.
   */
  test("jstr() chaining multiple operations", () => {
    expect(jstr("Hello World").repeat(2).lower().capitalize().toString()).toBe(
      "Hello Worldhello World"
    );
  });
});
